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
        console.log('use effect contents')
        setIndex(0)
        setDisplayedContent('')
        setcontentIndex(0)
        setCssStyle('type-writer');
        setEnded(false);

    }, [contents]);

    useEffect(() => {
        if (!ended) {
            if (typeof (content) === 'string') {
                const run = () => {
                    console.log('running index',index, ' to ',content.length - 1)
                    console.log('ended',ended)
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

                const run = () => {
                    console.log('running timer',contentIndex, ' to ',contents.length - 1)
                    console.log('ended',ended)
                    if ((contents.length - 1) === contentIndex) {
                        if (!ended) {
               
                            if (!cursor) {
                       
                                setCssStyle('');
                            }
                            setEnded(true)
                        }

                    } else {
         
                        setDisplayedContent('')
                        setcontentIndex(contentIndex + 1)

                    }
                }
                let timer = setTimeout(run, content);
                return () => clearTimeout(timer);

            }
        }

    }, [index, contentIndex, content, onDone, speed, contents.length, cursor, ended]);

    useEffect(() => {
        if (typeof (content) === 'string') {
            setDisplayedContent(
                (displayedContent) => displayedContent + content[index]
            );
        }
    }, [index, content]);

    useEffect(() => {
        console.log('useEffect ended', ended)
        if (ended) {
            console.log('ENTRO AL ONDONE')
            onDone();
        }
    }, [ended]);


    return <p className={`${cssStyle}`} >{displayedContent}</p>;
};

export default TypeWriter;