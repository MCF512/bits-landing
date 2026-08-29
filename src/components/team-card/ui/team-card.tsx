import React, { FC } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { GradientText } from "@/shared";
import { Mentor } from "@/types";
import { classNames } from "@/utils/classNames";
import styles from "./team-card.module.scss";

export const TeamCard: FC<Mentor> = ({
  name,
  role,
  image,
  bio,
  dirs,
  gradient,
}) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <li className={styles.item}>
      <Dialog>
        <DialogTrigger className={styles.trigger}>
          <div className={styles.photo}>
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                sizes="160px"
                className={styles.photoImage}
              />
            ) : (
              <span className={styles.photoFallback}>{initials}</span>
            )}
          </div>

          <div className={styles.body}>
            <div>
              <GradientText gradient={gradient} className={styles.eyebrow}>
                Педагог · BIT&apos;S
              </GradientText>
              <GradientText gradient="chrome" className={styles.name}>
                {name}
              </GradientText>
              <p className={styles.role}>{role}</p>
            </div>

            <div className={styles.tags}>
              {dirs.map((dir) => (
                <span key={dir} className={styles.tag}>
                  {dir}
                </span>
              ))}
            </div>

            <GradientText gradient={gradient} className={styles.more}>
              Подробнее →
            </GradientText>
          </div>
        </DialogTrigger>

        <DialogContent
          className={styles.modal}
          closeVisible={false}
        >
          <div className={styles.modalPhoto}>
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 800px) 100vw, 240px"
                className={styles.modalPhotoImage}
              />
            ) : (
              <span className={styles.photoFallback}>{initials}</span>
            )}
          </div>

          <div className={styles.modalBody}>
            <div className={styles.modalHeader}>
              <div>
                <GradientText gradient={gradient} className={styles.eyebrow}>
                  Педагог · BIT&apos;S Dance Studio
                </GradientText>
                <DialogTitle className={styles.modalTitle}>
                  <GradientText gradient="chrome">{name}</GradientText>
                </DialogTitle>
                <p className={styles.role}>{role}</p>
              </div>
              <DialogClose className={styles.close} aria-label="Закрыть">
                ✕
              </DialogClose>
            </div>

            <div className={styles.divider} />

            <DialogDescription className={styles.bio}>{bio}</DialogDescription>

            <div>
              <div className={styles.dirsLabel}>Направления</div>
              <div className={styles.tags}>
                {dirs.map((dir) => (
                  <span
                    key={dir}
                    className={classNames(styles.tag, {}, [styles.tagStrong])}
                  >
                    {dir}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
};
