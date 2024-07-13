import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import '../Styles/BtnReadMore.Styled.js';
import { useState } from 'react';
import { ReadMore } from '../Styles/BtnReadMore.Styled.js';
import { useTranslation } from 'react-i18next';

function ContextAwareToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    return (
        <ReadMore type="button" onClick={decoratedOnClick} >
        {children}
        </ReadMore>
    );
}


function BtnReadMore(props) {
    const {t} = useTranslation()
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <Accordion defaultActiveKey="0" style={{display : "inline" , marginLeft : "10px"}}>
        <ContextAwareToggle eventKey="1" callback={toggleContent}>
            {showFullContent ? `${t('ReadLess')} !` : `${t('btnLearn')} !`  }
        </ContextAwareToggle>
        <Accordion.Collapse eventKey="1">
            <p>{showFullContent ? props.content : props.content.substring(0, 100)}</p>
        </Accordion.Collapse>
        </Accordion>
    );
    }

export default BtnReadMore;

