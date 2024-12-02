import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";

interface IQuestion {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: IQuestion) => {
  return (
    <article className={styles["question"]}>
      <h3 className={`${styles["question__question"]} h3`}>{question}</h3>
      <p className={styles["question__answer"]}>{answer}</p>
      <div className={styles["question__button-wrapper"]}>
        <Button className="secondary">Read More</Button>
      </div>
    </article>
  );
};

export default Question;
