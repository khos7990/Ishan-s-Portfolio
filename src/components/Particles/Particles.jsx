import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";


export default function Particle() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={{background: {
                color: '#051622', 
            },
            fpsLimit: 140,
            interactivity: {
                detect_on: 'canvas',
                events: {
                    resize: true,
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    }
                }
                },
                particles: {
                    color: {
                        value: '#1BA098'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 200,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        }, 
                        value: 1
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.05
                        },
                        value: 5
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 3,
                        straight: false
                    }
                }
            }

            } init={particlesInit}/>
            </div>
    )}


