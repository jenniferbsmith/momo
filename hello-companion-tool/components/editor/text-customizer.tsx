import React, { useState } from 'react';
import InputField from './input-field';
import SliderField from './slider-field';
import ColorPicker from './color-picker';
import FontFamilyPicker from './font-picker'; 
import { Button } from '../ui/button';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Move, Text, Bold, RotateCw, Palette, LightbulbIcon, CaseSensitive, TypeOutline, ArrowLeftRight, ArrowUpDown, AlignHorizontalSpaceAround } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TextCustomizerProps {
    textSet: {
        id: number;
        text: string;
        fontFamily: string;
        top: number;
        left: number;
        color: string;
        fontSize: number;
        fontWeight: number;
        opacity: number;
        rotation: number;
        shadowColor: string;
        shadowSize: number;
        tiltX: number;
        tiltY: number;
        letterSpacing: number;
    };
    handleAttributeChange: (id: number, attribute: string, value: any) => void;
    removeTextSet: (id: number) => void;
    duplicateTextSet: (textSet: any) => void;
}

const TextCustomizer: React.FC<TextCustomizerProps> = ({ textSet, handleAttributeChange, removeTextSet, duplicateTextSet }) => {
    const [activeControl, setActiveControl] = useState<string | null>(null);

    const controls = [
        { id: 'text', icon: <CaseSensitive size={20} />, label: 'Text' },
        { id: 'fontFamily', icon: <TypeOutline size={20} />, label: 'Font' },
        { id: 'color', icon: <Palette size={20} />, label: 'Color' },
        { id: 'position', icon: <Move size={20} />, label: 'Position' },
        { id: 'fontSize', icon: <Text size={20} />, label: 'Size' },
        { id: 'fontWeight', icon: <Bold size={20} />, label: 'Weight' },
        { id: 'letterSpacing', icon: <AlignHorizontalSpaceAround size={20} />, label: 'Letter spacing' },
        { id: 'opacity', icon: <LightbulbIcon size={20} />, label: 'Opacity' },
        { id: 'rotation', icon: <RotateCw size={20} />, label: 'Rotate' },
        { id: 'tiltX', icon: <ArrowLeftRight size={20} />, label: 'Tilt X (3D effect)' },
        { id: 'tiltY', icon: <ArrowUpDown size={20} />, label: 'Tilt Y (3D effect)' },
    ];

    return (
        <AccordionItem value={`item-${textSet.id}`}>
            <AccordionTrigger className="px-4">{textSet.text}</AccordionTrigger>
            <AccordionContent className="px-4">
                {/* Mobile Controls */}
                <div className="md:hidden">
                    <ScrollArea className="w-full">
                        <div className="flex w-max gap-1 mb-2 p-1">
                            {controls.map((control) => (
                                <button
                                    key={control.id}
                                    onClick={() => setActiveControl(activeControl === control.id ? null : control.id)}
                                    className={`flex flex-col items-center justify-center min-w-[4.2rem] h-[4.2rem] rounded-lg ${
                                        activeControl === control.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                                    }`}
                                >
                                    {control.icon}
                                    <span className="text-xs mt-1">{control.label}</span>
                                </button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                    <div>
                        {activeControl === 'text' && (
                            <InputField
                                attribute="text"
                                label="Text"
                                currentValue={textSet.text}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'fontFamily' && (
                            <FontFamilyPicker
                                attribute="fontFamily"
                                currentFont={textSet.fontFamily}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'color' && (
                            <ColorPicker
                                attribute="color"
                                label="Text Color"
                                currentColor={textSet.color}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'position' && (
                            <div className="space-y-4">
                                <SliderField
                                    attribute="left"
                                    label="X Position"
                                    min={-200}
                                    max={200}
                                    step={1}
                                    currentValue={textSet.left}
                                    handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                                />
                                <SliderField
                                    attribute="top"
                                    label="Y Position"
                                    min={-100}
                                    max={100}
                                    step={1}
                                    currentValue={textSet.top}
                                    handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                                />
                            </div>
                        )}

                        {activeControl === 'fontSize' && (
                            <SliderField
                                attribute="fontSize"
                                label="Text Size"
                                min={10}
                                max={800}
                                step={1}
                                currentValue={textSet.fontSize}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'fontWeight' && (
                            <SliderField
                                attribute="fontWeight"
                                label="Font Weight"
                                min={100}
                                max={900}
                                step={100}
                                currentValue={textSet.fontWeight}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}
                        
                        {activeControl === 'letterSpacing' && (
                            <SliderField
                                attribute="letterSpacing"
                                label="Letter Spacing"
                                min={-20}
                                max={100}
                                step={1}
                                currentValue={textSet.letterSpacing}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'opacity' && (
                            <SliderField
                                attribute="opacity"
                                label="Text Opacity"
                                min={0}
                                max={1}
                                step={0.01}
                                currentValue={textSet.opacity}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'rotation' && (
                            <SliderField
                                attribute="rotation"
                                label="Rotation"
                                min={-360}
                                max={360}
                                step={1}
                                currentValue={textSet.rotation}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'tiltX' && (
                            <SliderField
                                attribute="tiltX"
                                label="Horizontal Tilt (3D effect)"
                                min={-45}
                                max={45}
                                step={1}
                                currentValue={textSet.tiltX}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}

                        {activeControl === 'tiltY' && (
                            <SliderField
                                attribute="tiltY"
                                label="Vertical Tilt (3D effect)"
                                min={-45}
                                max={45}
                                step={1}
                                currentValue={textSet.tiltY}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        )}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <InputField
                            attribute="text"
                            label="Text"
                            currentValue={textSet.text}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FontFamilyPicker
                                attribute="fontFamily"
                                currentFont={textSet.fontFamily}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                            <ColorPicker
                                attribute="color"
                                label="Text Color"
                                currentColor={textSet.color}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SliderField
                                attribute="left"
                                label="X Position"
                                min={-200}
                                max={200}
                                step={1}
                                currentValue={textSet.left}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                            <SliderField
                                attribute="top"
                                label="Y Position"
                                min={-100}
                                max={100}
                                step={1}
                                currentValue={textSet.top}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        </div>
                        
                        <SliderField
                            attribute="fontSize"
                            label="Text Size"
                            min={10}
                            max={800}
                            step={1}
                            currentValue={textSet.fontSize}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <SliderField
                            attribute="fontWeight"
                            label="Font Weight"
                            min={100}
                            max={900}
                            step={100}
                            currentValue={textSet.fontWeight}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <SliderField
                            attribute="letterSpacing"
                            label="Letter Spacing"
                            min={-20}
                            max={100}
                            step={1}
                            currentValue={textSet.letterSpacing}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <SliderField
                            attribute="opacity"
                            label="Text Opacity"
                            min={0}
                            max={1}
                            step={0.01}
                            currentValue={textSet.opacity}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <SliderField
                            attribute="rotation"
                            label="Rotation"
                            min={-360}
                            max={360}
                            step={1}
                            currentValue={textSet.rotation}
                            handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SliderField
                                attribute="tiltX"
                                label="Horizontal Tilt (3D effect)"
                                min={-45}
                                max={45}
                                step={1}
                                currentValue={textSet.tiltX}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                            <SliderField
                                attribute="tiltY"
                                label="Vertical Tilt (3D effect)"
                                min={-45}
                                max={45}
                                step={1}
                                currentValue={textSet.tiltY}
                                handleAttributeChange={(attribute, value) => handleAttributeChange(textSet.id, attribute, value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row gap-2 pt-4">
                        <Button 
                            onClick={() => duplicateTextSet(textSet)}
                            className="flex-1"
                        >
                            Duplicate Text Set
                        </Button>
                        <Button 
                            variant="destructive" 
                            onClick={() => removeTextSet(textSet.id)}
                            className="flex-1"
                        >
                            Remove Text Set
                        </Button>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default TextCustomizer;