// src/components/Quotes.js
import React, { useEffect, useState } from 'react';

const quotesArray = [
    `The actual practice means to observe body sensations and mental reactions to sensations in a methodical, continuous and objective manner, thereby uncovering the basic patterns of the mind. People sometimes turn meditation into a pursuit of special experiences of bliss and ecstasy. Yet in truth, consciousness is the greatest mystery in the universe, and mundane feelings of heat and itching are every bit as mysterious as feelings of rapture or cosmic oneness. Vipassana meditators are cautioned never to embark on a search for special experiences, but to concentrate on understanding the reality of their minds whatever this reality might be.`,

    `I was asked to stand at the gateway of my body – the nostrils – and just observe whatever comes in or goes out. Yet after a few moments I lost my focus and abandoned my post. It was an eye-opening experience.
  As the course progressed, students were taught to observe not just their breath, but sensations throughout their body. Not special sensations of bliss and ecstasy, but rather the most mundane and ordinary sensations: heat, pressure, pain and so on. The technique of Vipassana is based on the insight that the flow of mind is closely interlinked with body sensations. Between me and the world there are always body sensations. I never react to events in the outside world; I always react to the sensations in my own body. When the sensation is unpleasant, I react with aversion. When the sensation is pleasant, I react with cravings for more. Even when we think we react to what another person has done, to President Trump’s latest tweet, or to a distant childhood memory, the truth is we always react to our immediate bodily sensations. If we are outraged that somebody insulted our nation or our god, what makes the insult unbearable is the burning sensations in the pit of our stomach and the band of pain that grips our heart. Our nation feels nothing, but our body really hurts.`
];

const Quotes = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        generateRandomQuote();
    }, []);

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        setQuote(quotesArray[randomIndex]);
    };

    return (
        <div style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.6' }}>{quote}</p>
            <button
                onClick={generateRandomQuote}
                style={{
                    padding: '10px 20px',
                    marginTop: '20px',
                    cursor: 'pointer',
                    backgroundColor: '#4a90e2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Get New Quote
            </button>
        </div>
    );
};

export default Quotes;