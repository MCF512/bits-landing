import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GradientText } from "@/shared";
import type { UkGradient } from "@/shared";
import styles from "./direction-item.module.scss";

export interface DirectionItemProps {
  id: string;
  title: string;
  tag: string;
  age?: string;
  description: string;
  image: string | StaticImageData;
  gradient: UkGradient;
}

export const DirectionItem: FC<DirectionItemProps> = ({
  title,
  tag,
  age,
  description,
  image,
  gradient,
}) => {
  return (
    <Dialog>
      <DialogTrigger className={styles.trigger} aria-label={title}>
        <div className={styles.card} data-gradient={gradient}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 800px) 50vw, 25vw"
            className={styles.image}
          />
          <div className={styles.tint} aria-hidden />
          <div className={styles.fade} aria-hidden />
          <div className={styles.info}>
            <GradientText gradient={gradient} className={styles.tag}>
              {tag}
            </GradientText>
            <GradientText gradient="chrome" className={styles.title}>
              {title}
            </GradientText>
            {age ? <span className={styles.age}>{age}</span> : null}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className={styles.modal} closeVisible={false}>
        <DialogClose className={styles.close} aria-label="Закрыть">
          ✕
        </DialogClose>

        <div className={styles.modalBody}>
          <GradientText gradient={gradient} className={styles.tag}>
            {tag}
          </GradientText>
          <DialogTitle className={styles.modalTitle}>
            <GradientText gradient="chrome">{title}</GradientText>
          </DialogTitle>
          {age ? <p className={styles.modalAge}>{age}</p> : null}
          <DialogDescription className={styles.modalDesc}>
            {description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};
