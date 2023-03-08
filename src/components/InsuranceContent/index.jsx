import styles from './styles.module.scss';
import Image from "next/image";
import { useState } from 'react';
import CarrouselText from '../CarrouselText';

export default function InsuranceContent({content}){
    return(
        <section className={styles.container}>
           
            <section className={styles.content}>
                <article className={styles.title}>
                    <h2>{content.title}</h2>
                    {content.contents.map(content => <p>{content}</p>)}
                </article>
                <div className={styles.subtitle}>
                    <CarrouselText arrayContent={content.contentCarousel}/>
                </div>
            </section>
        </section>
    )
}