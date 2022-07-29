import { useState, useEffect } from "react";
import './TypeWriter.scss';

const TypeWriter = ({ contents = [], speed = 1000, onDone }) => {
    const [contentIndex, setcontentIndex] = useState(0);
    const [displayedContent, setDisplayedContent] = useState("");
    const [index, setIndex] = useState(0);
    const content = contents[contentIndex];

    useEffect(() => {
        if (typeof (content) === 'string') {
            const animKey = setInterval(() => {
                setIndex((index) => {
                    if (index >= content.length - 1) {
                        clearInterval(animKey);
                        if ((contents.length - 1) === contentIndex) {
                            onDone()
                        } else {
                            setcontentIndex(contentIndex + 1)
                            setIndex(0)
                        }

                        return index;
                    }
                    return index + 1;
                });
            }, speed);

            return () => clearInterval(animKey);
        } else if (typeof (content) === 'number') {
            const timer = setTimeout(() => {
                if ((contents.length - 1) === contentIndex) {
                    onDone()
                } else {
                    setIndex(0)
                    setDisplayedContent('')
                    setcontentIndex(contentIndex + 1)

                }
            }, content);
            return () => clearTimeout(timer);
        }
    }, [contentIndex, content, onDone, speed, contents.length]);

    useEffect(() => {
        if (typeof (content) === 'string') {
            setDisplayedContent(
                (displayedContent) => displayedContent + content[index]
            );
            }
    }, [index, content]);

    return <p className="type-writer">{displayedContent}</p>;
};

export default TypeWriter;