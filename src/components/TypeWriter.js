import { useState, useEffect } from "react";
import './TypeWriter.scss';

const TypeWriter = ({ contents = [], speed = 1000, onDone, cursor = true }) => {
    const [ended, setEnded] = useState(false);
    const [contentIndex, setcontentIndex] = useState(0);
    const [displayedContent, setDisplayedContent] = useState("");
    const [cssStyle, setCssStyle] = useState('type-writer');
    const [index, setIndex] = useState(0);
    const content = contents[contentIndex];

    useEffect(() => {
        setIndex(0)
        setDisplayedContent('')
        setcontentIndex(0)
        setCssStyle('type-writer');
        setEnded(false);

    }, [contents]);

    useEffect(() => {
        console.log('useEffect', index, contentIndex, content, speed, contents.length);
        if (!ended) {
            if (typeof (content) === 'string') {
                const run = () => {
                    if (index >= content.length - 1) {
                        clearInterval(animKey);
                        if ((contents.length - 1) === contentIndex && !ended) {
                            setEnded(true)
                        } else {
                            setcontentIndex(contentIndex + 1)
                        }
                    } else {
                        setIndex(index + 1);
                    }
                }
                const animKey = setInterval(run, speed);

                return () => clearInterval(animKey);
            } else if (typeof (content) === 'number') {
                console.log('es length', contents.length)
                console.log('es contentIndex', contentIndex)

                const run = () => {
                    console.log('setTimeout', content, 'contentIndex = ', contentIndex, 'contents.length', contents.length, 'index', index);
                    if ((contents.length - 1) === contentIndex) {
                        if (!ended) {
                            console.log('done')
                            if (!cursor) {
                                console.log('cursor off')
                                setCssStyle('');
                            }
                            setEnded(true)
                        }

                    } else {
                        console.log('aumento')
                        setDisplayedContent('')
                        setcontentIndex(contentIndex + 1)

                    }
                }
                let timer = setTimeout(run, content);
                return () => clearTimeout(timer);

            }
        }

    }, [index, contentIndex, content, onDone, speed, contents.length]);

    useEffect(() => {

        if (typeof (content) === 'string') {
            setDisplayedContent(
                (displayedContent) => displayedContent + content[index]
            );
        }
    }, [index, content]);

    useEffect(() => {
        console.log('useeffect', 'done')
        if (ended) {
            console.log('doneee')
            onDone();
        }
    }, [ended]);


    return <p className={`${cssStyle}`} >{displayedContent}</p>;
};

export default TypeWriter;