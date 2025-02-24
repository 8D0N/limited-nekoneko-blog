'use client';
import { useState } from 'react';

export function LikeButtons() {
    const [likeCount, setLikeCount] = useState(0);
    const [fishCount, setFishCount] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);
    const [comboCount, setComboCount] = useState(0);
    const [nyanEffect, setNyanEffect] = useState(false);

    const handleLikeClick = () => {
        const now = Date.now();
        if (now - lastClickTime < 500) {
            setComboCount(prev => prev + 1);
            if (comboCount > 5) {
                setNyanEffect(true);
                setTimeout(() => setNyanEffect(false), 1000);
            }
        } else {
            setComboCount(1);
        }
        setLastClickTime(now);
        setLikeCount(prev => prev + 1);
    };

    const handleFishClick = () => {
        setFishCount(prev => prev + 1);
        const nyanSounds = ['にゃー！', 'にゃおーん！', 'にゃんにゃん！', 'にゃぁ...♪'];
        const randomNyan = nyanSounds[Math.floor(Math.random() * nyanSounds.length)];

        const bubble = document.createElement('div');
        bubble.textContent = randomNyan;
        bubble.className = 'fixed text-xl font-bold animate-bounce';
        bubble.style.left = `${Math.random() * 80 + 10}vw`;
        bubble.style.top = `${Math.random() * 50 + 25}vh`;
        document.body.appendChild(bubble);

        setTimeout(() => bubble.remove(), 1000);
    };

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={handleLikeClick}
                className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-transform hover:scale-110"
            >
                👍 いいにゃ！ {likeCount > 0 && `x${likeCount}`}
                {comboCount > 1 && <span className="text-xs ml-1">COMBO x{comboCount}!</span>}
            </button>
            <button
                onClick={handleFishClick}
                className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-transform hover:scale-110"
            >
                🐟 おさかなをあげる {fishCount > 0 && `x${fishCount}`}
            </button>
        </div>
    );
} 