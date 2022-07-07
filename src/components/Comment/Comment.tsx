import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar/Avatar";

import styles from "./Comment.module.css";

const Comment: React.FC = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/WillDevAc.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Will Developer</strong>
              <time title="11 de Maio ás 00:18h" dateTime="2022-85-11 08:13:38">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!</p>
          
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
