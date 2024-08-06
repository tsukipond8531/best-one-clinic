import styled from "styled-components";
import { Link } from "react-router-dom";

// -------------------------------------------------
// Utility functions for conditional styles
// For forms:
// A Functions maps the opacity of the form based on the mode and formType
const formOpacity = (mode, formType) => {
    const conditions = {
        'signin': {
            'signin': 1,
            'signup': 0,
        },
        'signup': {
            'signin': 0,
            'signup': 1,
        },
    };

    return conditions[mode][formType] || 0;
}
// A Functions maps z-index of the form based on the mode and formType
const formZindex = (mode, formType) => {
    const conditions = {
        'signin': {
            'signin': 2,
            'signup': 1,
        },
        'signup': {
            'signin': 1,
            'signup': 2,
        },
    };

    return conditions[mode][formType] || 0;
}

// For Panels
// A Functions maps the pointer-events of the panel based on the mode and placement
const panelPointerEvents = (mode, placement) => {
    const conditions = {
        'signin': {
            'left': 'all',
            'right': 'none',
        },
        'signup': {
            'left': 'none',
            'right': 'all',
        },
    };

    return conditions[mode][placement] || 'none';
}
// A Functions maps the horizontal transformation of the panel based on the mode and placement
const transform = (mode, placement) => {
    const translations = {
        'signin-left': '0',
        'signin-right': '800px',
        'signup-left': '-800px',
        'signup-right': '0',
    };

    const key = `${mode}-${placement}`;
    return translations[key] || '';
};
// A Functions maps the vertical transformation of the panel based on the mode and placement
const smTransform = (mode, placement) => {
    const translations = {
        'signin-left': '0',
        'signin-right': '350px',
        'signup-left': '-350px',
        'signup-right': '0',
    };

    const key = `${mode}-${placement}`;
    return translations[key] || '';

}

// -------------------------------------------------




export const PageWrapper = styled.div`
    direction: ltr !important;
    // Page Wrapper styles
    position: relative;
    width: 100%;
    height: calc(100vh - 90px) !important;
    overflow: hidden;

    // -------- The Circle Styles -------- 
    &::before {
        content: "";
        position: absolute;
        height: 2000px;
        width: 2000px;
        bottom: 0;
        background-image: radial-gradient(circle, #29445c, #436484, #436484, #29445c, #29445c);
        transition: 1.8s ease-in-out;
        border-radius: 50%;
        z-index: 6;
        transform: translateY(-50%);

        // Horizontal Transformation on computer screens Based on mode state 
        right: ${({ $mode }) => ($mode === 'signin' ? '48%' : '52%')};
        transform: translateX(${({ $mode }) => ($mode === 'signin' ? '0%' : '100%')});
    }
    // -------- The Circle End -------- 

    // Page Wrapper Media Queries
    @media (width <= 800px) {
        min-height: 800px;
        height: 100dvh;

        &::before {
            width: 1500px;
            height: 1500px;
            transition: 1.8s ease-in-out;
            left: 30%;
            top: initial;
            right: initial;
            transform: translate(5, auto);

            // Vertical Transformation on tablet and smartphones screens Based on mode state 
            bottom: ${({ $mode }) => ($mode === 'signin' ? '68%' : '32%')};
            transform: ${({ $mode }) => ($mode === 'signin' ? 'translateX(-50%)' : 'translate(-50% , 100%)')};
        }
    }

`



export const FormsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`



export const Forms = styled.div`
    position: absolute;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transform: translate(-50%, -50%);
    // Forms Parent placement on computer screens Based on mode state 
    left: ${({ $mode }) => ($mode === 'signin' ? '75%' : '25%')};
    width: 50%;
    top: 50%;

    @media (width <= 800px) {
        width: 100%;

        // Form Parent placement on tablets and smartphones screens Based on mode state 
        top: ${({ $mode }) => ($mode === 'signin' ? '87%' : '13%')};
        left: 50%;
        transform: translate(-50% , ${({ $mode }) => ($mode === 'signin' ? '-100%' : '0')});
        transition: 1s 0.8s ease-in-out;
    }

`



export const Form = styled.form`
    // Form styles
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    // Showing or Hiding Form on computer screens Based on mode state and form type 
    opacity: ${({ $mode, $formType }) => formOpacity($mode, $formType)};
    z-index: ${({ $mode, $formType }) => formZindex($mode, $formType)};
    
    // -------------- Form children styles --------------
    .form-title {
        font-size: 2.2rem;
        color: #374955;
        margin-bottom: 1rem;
    
    }

    .input-field {
        max-width: 24.75rem;
        width: 100%;
        background-color: #f0f0f0;
        margin: 10px 0;
        height: 55px;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        padding: 0 0.4rem;
        position: relative;
        
        // -------------- input field children styles --------------
        i {
            text-align: center;
            line-height: 55px;
            /* color: #acacac; */
            color: #29445c;
            transition: 0.5s;
            font-size: 1.2rem;
            transform: translateY(2px);
        }
        input {
            background: none;
            outline: none;
            border: none;
            line-height: 1;
            font-weight: 400;
            font-size: 1.2rem;
            color: #374955;
        }
        .pass{
            /* background-color: #DDA25E; */
            width: 100%;
        }
        .passStyle{
            display: flex;
        }
        input::placeholder {
            color: #acacac;
            font-weight: 500;
        }
        .btn-See{
            /* padding: 10px 0 !important; */
            margin-top: 8px;
            width: 40px;
            height: 40px;
            border: none;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden !important;
            font-size: 20px;
            border-radius: 70px ;
            color :#374955;
            /* background-color: #DDA25E; */
        }
        @media (width <= 570px) {
            
            
        }
        // -------------- input field children End --------------
    }

    .submit-btn {
        width: 150px;
        background-color: #436484;
        border: none;
        outline: none;
        height: 49px;
        border-radius: 49px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 10px 0;
        cursor: pointer;
        transition: 0.5s;
    
        &:hover {
            background-color: #29445c;
        }
    
    }

    .social-txt {
        padding: 0.7rem 0;
        font-size: 1rem;
    }

    .social-media {
        display: flex;
        justify-content: center;
    }
    // -------------- Form children End --------------

    // -------------- Form Media Queries --------------
    @media (width <= 570px) {
        padding: 0 1.5rem;
    }


`



export const SocialIcon = styled(Link)`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #374955;
    border-radius: 50%;
    color: #374955;
    text-decoration: none;
    margin: 0 0.45rem;
    transition: 0.3s;
    font-size: 1.1rem;

    &:hover {
        color: #A36E2D;
        border-color: #A36E2D;
    }
`



export const PanelsWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (width <= 800px) {
        padding-top: 3rem;
        padding-bottom: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

`



export const Panel = styled.div`
    // Panel styles
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 3rem;
    text-align: center;
    z-index: 6;
    padding: 3rem 2rem 0;
    // Panel Pointer events Based on mode and placement states
    pointer-events: ${({ $mode, $placement }) => panelPointerEvents($mode, $placement)};

    // ----------------- Panel children styles -----------------
    h3 {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 600;
    }
    p {
        font-size: 0.95rem;
        padding: 0.7rem 0;
    }
    .panel-btn {
        margin: 0;
        background: none;
        border: 2px solid #fff;
        border-radius: 49px;
        outline: none;
        width: 130px;
        height: 41px;
        font-weight: 600;
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            /* background-color: ${({theme}) => theme.white};
            color: ${({theme}) => theme.dark}; */
            background-color: white;
            color: #374955;
        }
    }
    .panel-content {
        color: #fff;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
        margin-inline: auto;
        width: 80%;
    }
    .panel-img {
        width: 80%;
        max-height: 50vh;
        margin-inline: auto;
        transition: transform 1.1s ease-in-out;
        transition-delay: 0.4s;
    }
    .panel-content, .panel-img {
        transform: translateX(${({ $mode, $placement }) => transform($mode, $placement)});
    }
    // ----------------- Panel children End -----------------

    // ----------------- Panel Media Queries -----------------
    @media (width <= 800px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
        grid-column: 1 / 2;
        // 
        grid-row: ${({ $placement }) => ($placement === 'left' ? '1 / 2' : '3 / 4')};

        // ------------ Panel children styles ------------
        h3{
            font-size: 1.2rem;
        }
        p {
            font-size: 0.7rem;
            padding-block: 0.5rem;
        }
        .panel-btn {
            width: 100px;
            height: 35px;
            font-size: 0.7rem;
        }
        .panel-content {
            padding-right: 15%;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.8s;
        }
        .panel-img {
            width: 200px;
            transition: transform 0.9s ease-in-out;
            transition-delay: 0.6s;
        }
        .panel-content, .panel-img {
            transform: translateY(${({ $mode, $placement }) => smTransform($mode, $placement)});
        }
    }

    @media (width <= 570px) {
        .panel-content {
            padding: 1.5rem 1rem 0.5rem;
        }
        .panel-img {
            display: none;
        }
    }

`


