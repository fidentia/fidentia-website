import styles from './styles.module.scss';
import Image from "next/image";
import { useState } from 'react';
import CarrouselText from '../CarrouselText';

export default function InsuranceContent({content}){
    

    return(
        <section className={styles.container}>
           
            <section className={styles.content}>
                <article className={styles.title}>
                    <h2>Investigador principal</h2>
                    <p>Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínicas </p>
                    <p>O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.</p>
                </article>
                <div className={styles.subtitle}>
                    <CarrouselText arrayContent={content}/>
                </div>
            </section>
        </section>
    )
}