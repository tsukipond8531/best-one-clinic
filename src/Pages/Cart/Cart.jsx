import { } from 'react'
import { useTranslation } from 'react-i18next'

function Cart() {
    const { t, i18n } = useTranslation()




    return (
        <section
            className={i18n.language == 'en' ? "dirLtR" : "dirRtL"}
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>  {t('YourCart')} </h1>
                <span className='headerSpan'></span>
            </div>

            

        </section>
    )
}

export default Cart