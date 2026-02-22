import { useState, useRef } from 'react';
import { Input, Button, Popover } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Paperclip, Send, X } from 'lucide-react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface MessageInputProps {
    onSend?: (text: string, mediaFiles: File[]) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
    const [message, setMessage] = useState('');
    const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const urls = files.map((file) => URL.createObjectURL(file));
        setMediaFiles((prev) => [...prev, ...files]);
        setPreviewUrls((prev) => [...prev, ...urls]);
    };

    const handleRemoveMedia = (index: number) => {
        setMediaFiles((prev) => prev.filter((_, i) => i !== index));
        setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSend = () => {
        if (!message.trim() && mediaFiles.length === 0) return;

        if (onSend) {
            onSend(message, mediaFiles);
        }

        setMessage('');
        setMediaFiles([]);
        setPreviewUrls([]);
    };

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    return (
        <div className="flex flex-col gap-2">
            {previewUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2 p-2 bg-gray-50 rounded-xl border border-gray-100">
                    {previewUrls.map((url, index) => (
                        <div
                            key={index}
                            className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 group"
                        >
                            <img src={url} alt="preview" className="w-full h-full object-cover" />
                            <button
                                onClick={() => handleRemoveMedia(index)}
                                className="absolute top-1 right-1 bg-white/80 hover:bg-white text-red-500 rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex items-center gap-2">
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

                <Button
                    type="text"
                    shape="circle"
                    icon={<Paperclip size={20} className="text-gray-400" />}
                    onClick={() => fileInputRef.current?.click()}
                    className="hover:bg-gray-100"
                />

                <div className="flex-1 relative flex items-center ">
                    <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onPressEnter={handleSend}
                        placeholder="Type a message"
                        suffix={
                            <Popover
                                content={<EmojiPicker onEmojiClick={onEmojiClick} />}
                                trigger="click"
                                placement="topLeft"
                            >
                                <Button
                                    type="text"
                                    icon={<SmileOutlined />}
                                    className="text-gray-400! hover:text-white! h-8! w-8!"
                                />
                            </Popover>
                        }
                        className="grow bg-[#EBEBEB]! border-none! text-[16px]! text-gray-700 placeholder:text-gray-400 
           outline-none focus:outline-none focus:ring-0 w-full!"
                    />
                </div>

                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<Send size={18} className="ml-1" />}
                    onClick={handleSend}
                    disabled={!message.trim() && mediaFiles.length === 0}
                    className={`shrink-0 flex items-center justify-center bg-[#055E6E] hover:bg-[#044d5a] border-none ${
                        !message.trim() && mediaFiles.length === 0 ? 'opacity-50 grayscale' : ''
                    }`}
                />
            </div>
        </div>
    );
}
