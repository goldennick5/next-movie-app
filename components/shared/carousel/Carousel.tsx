import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FC, ReactNode, useCallback } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperModule, SwiperOptions } from "swiper/types";

import { CarouselButton } from "@/components/shared/carousel/ui/carousel-button/CarouselButton";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDomRefWithSetter } from "@/components/shared/carousel/lib/useDomRefWithSetter";

interface ICarouselProps<T> extends SwiperProps {
  items: T[] | undefined;
  renderItem: (item: T, idx: number) => ReactNode;
  className?: string;
  slideClassName?: string;
  options?: SwiperOptions;
  modules?: SwiperModule[];
  navigation?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
  prevBtnClass?: string;
  nextBtnClass?: string;
}

const Carousel = <T, _>({
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
}: ICarouselProps<T>) => {
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
