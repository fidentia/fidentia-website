import styles from './styles.module.scss';
import Image from "next/image";
import { useState } from 'react';
import CarrouselText from '../CarrouselText';

export default function InsuranceContent({content}){
    return(
        <section className={styles.container}>

            
            <figure>
                <img src='/images/person_doctor.svg'></img>
            </figure>
            <section className={styles.content}>
                <article className={styles.title}>
                    <div className={styles.title_main}>
                        <h2>{content.title}</h2>
                    </div>
                    <div className={styles.content_title}>
                        {content.contents.map(content => <p>{content}</p>)}
                    </div>
                </article>
                <div className={styles.subtitle}>
                    <CarrouselText arrayContent={content.contentCarousel}/>
                </div>
            </section>
        </section>
    )
}