import { FreeMode, Navigation } from "swiper/modules";

import Carousel from "@/components/shared/carousel/Carousel";
import { Icon } from "../icon/Icon";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Spinner from "@/components/shared/spinner/Spinner";
import { Title } from "@/components/shared/title/Title";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ICategoryProps extends PropsWithChildren {
  className?: string;
  containerClass?: string;
}

const Category = ({ className, containerClass, children }: ICategoryProps) => {
  return (
    <section className={clsx(styles["section"], className)}>
      <div className={clsx("container", containerClass)}>{children}</div>
    </section>
  );
};

interface ICategoryTitleProps extends PropsWithChildren {
  href?: string;
}

const CategoryTitle = ({ href, children, ...props }: ICategoryTitleProps) => {
  return (
    <Title as={href ? Link : "h2"} size="medium" className={styles["title"]}>
      {children}
      {href ? <Icon name="common/chevron" /> : null}
    </Title>
  );
};

const CategoryCarousel = <T, _>({ items, slideClassName, ...props }: any) => {
  return (
    <div className={styles.wrapper}>
      {items ? (
        <Carousel
          className={styles.slider}
          freeMode={{ momentumBounceRatio: 0 }}
          items={items}
          modules={[FreeMode, Navigation]}
          nextBtnClass={styles.nextBtn}
          prevBtnClass={styles.prevBtn}
          slideClassName={clsx(styles.slide, slideClassName)}
          {...props}
        />
      ) : (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

Category.Title = CategoryTitle;
Category.Carousel = CategoryCarousel;

export default Category;
