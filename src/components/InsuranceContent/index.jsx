import styles from './styles.module.scss';
import Image from "next/image";
import { useState } from 'react';
import CarrouselText from '../CarrouselText';

export default function InsuranceContent({content}){
    // console.log(content.title);
    return(
        <section className={styles.container}>
            <section className={styles.content}>
                <article className={styles.title}>
                    <h2>{content.title}</h2>
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