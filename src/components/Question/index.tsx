import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";
import { IQuestion } from "./types";

const Question = ({ question, answer }: IQuestion) => {
  return (
    <article className={styles.question}>
      <h3 className="h3">{question}</h3>
      <p className={styles.answer}>{answer}</p>
      <Button className={styles.button} styled="secondary">Read More</Button>
    </article>
  );
};

export default Question;
