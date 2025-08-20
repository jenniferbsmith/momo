'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ModeToggle } from '@/components/mode-toggle';
import TextCustomizer from '@/components/editor/text-customizer';
import MobileNav from '@/components/ui/mobile-nav';

import { PlusIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Menu } from 'lucide-react';

import { removeBackground } from "@imgly/background-removal";

import '@/app/fonts.css';

const Page = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isImageSetupDone, setIsImageSetupDone] = useState<boolean>(false);
    const [removedBgImageUrl, setRemovedBgImageUrl] = useState<string | null>(null);
    const [textSets, setTextSets] = useState<Array<any>>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUploadImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            await setupImage(imageUrl);
        }
    };

    const setupImage = async (imageUrl: string) => {
        try {
            const imageBlob = await removeBackground(imageUrl);
            const url = URL.createObjectURL(imageBlob);
            setRemovedBgImageUrl(url);
            setIsImageSetupDone(true);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewTextSet = () => {
        const newId = Math.max(...textSets.map(set => set.id), 0) + 1;
        setTextSets(prev => [...prev, {
            id: newId,
            text: 'edit',
            fontFamily: 'Inter',
            top: 0,
            left: 0,
            color: 'white',
            fontSize: 200,
            fontWeight: 800,
            opacity: 1,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowSize: 4,
            rotation: 0,
            tiltX: 0,
            tiltY: 0,
            letterSpacing: 0
        }]);
    };

    const handleAttributeChange = (id: number, attribute: string, value: any) => {
        setTextSets(prev => prev.map(set => 
            set.id === id ? { ...set, [attribute]: value } : set
        ));
    };

    const duplicateTextSet = (textSet: any) => {
        const newId = Math.max(...textSets.map(set => set.id), 0) + 1;
        setTextSets(prev => [...prev, { ...textSet, id: newId }]);
    };

    const removeTextSet = (id: number) => {
        setTextSets(prev => prev.filter(set => set.id !== id));
    };

    const saveCompositeImage = () => {
        if (!canvasRef.current || !isImageSetupDone) return;
    
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        const bgImg = new (window as any).Image();
        bgImg.crossOrigin = "anonymous";
        bgImg.onload = () => {
            canvas.width = bgImg.width;
            canvas.height = bgImg.height;
    
            ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    
            textSets.forEach(textSet => {
                ctx.save();
                
                ctx.font = `${textSet.fontWeight} ${textSet.fontSize * 3}px ${textSet.fontFamily}`;
                ctx.fillStyle = textSet.color;
                ctx.globalAlpha = textSet.opacity;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.letterSpacing = `${textSet.letterSpacing}px`;
    
                const x = canvas.width * (textSet.left + 50) / 100;
                const y = canvas.height * (50 - textSet.top) / 100;
    
                ctx.translate(x, y);
                
                const tiltXRad = (-textSet.tiltX * Math.PI) / 180;
                const tiltYRad = (-textSet.tiltY * Math.PI) / 180;
    
                ctx.transform(
                    Math.cos(tiltYRad),
                    Math.sin(0),
                    -Math.sin(0),
                    Math.cos(tiltXRad),
                    0,
                    0
                );
    
                ctx.rotate((textSet.rotation * Math.PI) / 180);
    
                if (textSet.letterSpacing === 0) {
                    ctx.fillText(textSet.text, 0, 0);
                } else {
                    const chars = textSet.text.split('');
                    let currentX = 0;
                    const totalWidth = chars.reduce((width, char, i) => {
                        const charWidth = ctx.measureText(char).width;
                        return width + charWidth + (i < chars.length - 1 ? textSet.letterSpacing : 0);
                    }, 0);
                    
                    currentX = -totalWidth / 2;
                    
                    chars.forEach((char, i) => {
                        const charWidth = ctx.measureText(char).width;
                        ctx.fillText(char, currentX + charWidth / 2, 0);
                        currentX += charWidth + textSet.letterSpacing;
                    });
                }
                ctx.restore();
            });
    
            if (removedBgImageUrl) {
                const removedBgImg = new (window as any).Image();
                removedBgImg.crossOrigin = "anonymous";
                removedBgImg.onload = () => {
                    ctx.drawImage(removedBgImg, 0, 0, canvas.width, canvas.height);
                    triggerDownload();
                };
                removedBgImg.src = removedBgImageUrl;
            } else {
                triggerDownload();
            }
        };
        bgImg.src = selectedImage || '';
    
        function triggerDownload() {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'text-behind-image.png';
            link.href = dataUrl;
            link.click();
        }
    };
    
    return ( 
        <>
            <div className='flex flex-col h-[calc(100vh-56px)]'>
                <header className='sticky top-0 z-10 bg-background/95 backdrop-blur-sm flex flex-row items-center justify-between p-3 md:p-5 px-4 md:px-10'>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                        <span className="block md:hidden">Text Behind Image</span>
                        <span className="hidden md:block">Text Behind Image Editor</span>
                    </h2>
                    
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept=".jpg, .jpeg, .png"
                        />
                        
                        <Button onClick={handleUploadImage} size="sm" className="hidden md:flex md:size-default">
                            Upload
                        </Button>
                        
                        {selectedImage && (
                            <Button onClick={saveCompositeImage} size="sm" className="hidden md:flex md:size-default">
                                Save
                            </Button>
                        )}
                        
                        <ModeToggle />
            </div>
                </header>
                
                <Separator /> 
                
                {selectedImage ? (
                    <div className='flex flex-col md:flex-row items-start justify-start gap-4 md:gap-10 w-full h-full px-4 md:px-10 mt-2 pb-16 md:pb-4 overflow-auto'>
                        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-1/2 gap-4">
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                            
                            <div className="min-h-[300px] w-full max-w-[500px] p-2 md:p-4 border border-border rounded-lg relative overflow-hidden">
                                {isImageSetupDone ? (
                                    <Image
                                        src={selectedImage} 
                                        alt="Uploaded"
                                        layout="fill"
                                        objectFit="contain" 
                                        objectPosition="center" 
                                    />
                                ) : (
                                    <div className='absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
                                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-base md:text-lg font-semibold animate-pulse text-center px-4">
                                            <ReloadIcon className='h-5 w-5 md:h-6 md:w-6 animate-spin' /> 
                                            <span>Analyzing picture...</span>
                                        </div>
                                    </div>
                                )}
                                {isImageSetupDone && textSets.map(textSet => (
                                    <div
                                        key={textSet.id}
                                        style={{
                                            position: 'absolute',
                                            top: `${50 - textSet.top}%`,
                                            left: `${textSet.left + 50}%`,
                                            transform: `
                                                translate(-50%, -50%) 
                                                rotate(${textSet.rotation}deg)
                                                perspective(1000px)
                                                rotateX(${textSet.tiltX}deg)
                                                rotateY(${textSet.tiltY}deg)
                                            `,
                                            color: textSet.color,
                                            textAlign: 'center',
                                            fontSize: `${textSet.fontSize}px`,
                                            fontWeight: textSet.fontWeight,
                                            fontFamily: textSet.fontFamily,
                                            opacity: textSet.opacity,
                                            letterSpacing: `${textSet.letterSpacing}px`,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {textSet.text}
                                    </div>
                                ))}
                                {removedBgImageUrl && (
                                    <Image
                                        src={removedBgImageUrl}
                                        alt="Removed bg"
                                        layout="fill"
                                        objectFit="contain" 
                                        objectPosition="center" 
                                        className="absolute top-0 left-0 w-full h-full"
                                    /> 
                                )}
                            </div>
            </div>

                        <div className='flex flex-col w-full md:w-1/2'>
                            <Button variant={'secondary'} onClick={addNewTextSet} className="mb-2 hidden md:flex"><PlusIcon className='mr-2'/> Add New Text</Button>
                            <ScrollArea className="h-[calc(100vh-240px)] md:h-[calc(100vh-200px)] rounded-md border p-2">
                                <Accordion type="single" collapsible className="w-full">
                                    {textSets.map(textSet => (
                                        <TextCustomizer 
                                            key={textSet.id}
                                            textSet={textSet}
                                            handleAttributeChange={handleAttributeChange}
                                            removeTextSet={removeTextSet}
                                            duplicateTextSet={duplicateTextSet}
                                        />
                                    ))}
                                </Accordion>
                            </ScrollArea>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center flex-1 w-full p-4 text-center'>
                        <div className="max-w-md space-y-4">
                            <h2 className="text-xl font-semibold">Welcome to Text Behind Image Editor</h2>
                            <p className="text-muted-foreground">Upload an image to get started creating beautiful text-behind-image designs.</p>
                            <Button onClick={handleUploadImage} size="lg" className="mt-4">Upload an Image</Button>
            </div>
                </div> 
                )} 
            </div>
            
            <MobileNav 
                isVisible={!!selectedImage}
                canSave={!!selectedImage && isImageSetupDone}
                onUpload={handleUploadImage}
                onSave={saveCompositeImage}
                onAddText={addNewTextSet}
            />
        </>
    );
}

export default Page;