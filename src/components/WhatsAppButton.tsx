import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber = '+91735553093',
    message = 'Hello, I would like to know more about your services.',
    position = 'bottom-right'
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'bottom-left':
                return 'left-4 bottom-4';
            case 'top-right':
                return 'right-4 top-4';
            case 'top-left':
                return 'left-4 top-4';
            case 'bottom-right':
            default:
                return 'right-6 bottom-6';
        }
    };

    return (
        <Button
            onClick={handleClick}
            className={cn(
                'fixed z-50 rounded-full p-4 shadow-xl transition-all duration-300',
                getPositionClasses(),
                'bg-green-500 text-white border-2 border-white',
                isMobile ? 'animate-bounce' : 'hover:bg-green-600 hover:shadow-2xl transform hover:scale-110 animate-bounce'
            )}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Chat on WhatsApp</span>
        </Button>
    );
};

export default WhatsAppButton;