import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FC, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselButton } from "@/components/shared/carousel/ui/carousel-button/CarouselButton";
import { SwiperOptions } from "swiper/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDomRefWithSetter } from "@/components/shared/carousel/lib/useDomRefWithSetter";

interface ICarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  className?: string;
  slideClassName?: string;
  options?: SwiperOptions;
  navigation?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
  prevBtnClass?: string;
  nextBtnClass?: string;
  modules?: string[];
}

const Carousel: FC<ICarouselProps<any>> = ({
  items,
  renderItem,
  className,
  slideClassName,
  navigation = true,
  pagination = false,
  autoplay = false,
  options,
  modules,
  prevBtnClass,
  nextBtnClass,
  ...props
}) => {
  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

  const renderItems = useCallback(
    (_items: typeof items) =>
      _items?.map((item, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {renderItem(item, index)}
        </SwiperSlide>
      )),
    [slideClassName, renderItem]
  );

  const swiperOptions: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
      769: {
        spaceBetween: 15,
      },
      1401: {
        spaceBetween: 18,
      },
    },
    ...options,
  };

  const DEFAULT_MODULES = [Navigation];
  if (pagination) {
    DEFAULT_MODULES.push(Pagination);
  }
  if (autoplay) {
    DEFAULT_MODULES.push(Autoplay);
  }

  return (
    <Swiper
      className={clsx(styles["carousel"], className)}
      navigation={{
        prevEl,
        nextEl,
      }}
      pagination={pagination ? { clickable: true } : false}
      modules={DEFAULT_MODULES}
      {...swiperOptions}
      {...props}
    >
      {navigation ? (
        <>
          <CarouselButton
            className={clsx(styles.prev, prevBtnClass)}
            ref={prevElRef}
          />
          <CarouselButton
            className={clsx(styles.next, nextBtnClass)}
            ref={nextElRef}
          />
        </>
      ) : null}
      {renderItems(items)}
    </Swiper>
  );
};

export default Carousel;
