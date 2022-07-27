export const TsParticlesConfig = () => ({
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: true,
            },
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: true,
                    smooth: 10,
                    force: 60,
                },
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5,
                },
            },
            bubble: {
                distance: 400,
                size: 2,
                duration: 0.3,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});
