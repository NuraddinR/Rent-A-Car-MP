import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";

import HeartFilledImg from "@/assets/icons/heart-filled-red.svg";
import HeartOutlinedImg from "@/assets/icons/heart-outlined.svg";
import TransmissionImg from "@/assets/icons/transmission.svg";
import PeopleImg from "@/assets/icons/people.svg";
import FuelImg from "@/assets/icons/fuel.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { AxiosResponseError, Rent } from "@/types";
import { formatPrice } from "@/lib/utils";
import { DialogTypeEnum, useDialog } from "@/hooks/useDialog";
import { RenderIf } from "../RenderIf";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getFavoriteAsync, selectAuth } from "@/store/auth";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import favoriteService from "@/services/favorite";

type Props = {
  rent: Rent;
};

export const RentCard = ({ rent }: Props) => {
  const dispatch = useAppDispatch();
  const { user, favorites } = useAppSelector(selectAuth);

  const { openDialog } = useDialog();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (favorites) {
      setIsLiked(favorites.includes(rent._id));
    }
  }, [favorites, rent._id]);

  const {
    _id,
    title,
    category,
    fuel,
    gear,
    imageUrls,
    capacity,
    price,
    discountPrice,
  } = rent;
  const mainImage = imageUrls[0];
  
  const onError = (error: AxiosResponseError) => {
    toast.error(error.response?.data.message ?? "Something went wrong!");
    setIsLiked(!isLiked);
  };
  const { mutate } = useMutation({
    mutationFn: favoriteService.toggle,
    onSuccess: () => {
      toast.success("Favorite updated successfully!");
      dispatch(getFavoriteAsync());
    },
    onError,
  });

  return (
    <div className="w-full bg-white rounded-[10px] p-4 lg:p-6">
      <div className="flex justify-between">
        <div>
          <Link
            to={paths.DETAIL(_id)}
            className="font-bold text-secondary-500 text-base lg:text-xl leading-[150%] tracking-[-0.6px] cursor-pointer hover:underline"
          >
            {title}
          </Link>
          <p className="text-secondary-300 text-xs lg:text-sm leading-[150%] tracking-[-0.28px] pb-2">
            {category?.title}
          </p>
        </div>
        <button
          onClick={() => {
            mutate({ id: _id! });
            setIsLiked(!isLiked);
          }}
          className="h-fit"
        >
          <img src={isLiked ? HeartFilledImg : HeartOutlinedImg} alt="heart" />
        </button>
      </div>
      <Link
        className="mt-8 lg:mt-12 relative cursor-pointer"
        to={paths.DETAIL(_id)}
      >
        <img src={mainImage} alt="Car" className="w-full h-32 object-contain" />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,#FFF_200%)] w-full h-[68px] absolute bottom-0" />
      </Link>
      <div className="flex justify-between items-center mt-5 lg:mt-9">
        <div className="flex gap-1.5 items-center">
          <img src={FuelImg} alt="Fuel" />
          <p className=" text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {fuel}L
          </p>
        </div>
        <div className="flex gap-1.5 items-center">
          <img src={TransmissionImg} alt="Transmission" />
          <p className=" text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {gear}
          </p>
        </div>
        <div className="flex gap-1.5 items-center">
          <img src={PeopleImg} alt="People" />
          <p className=" text-secondary-300 text-sm font-medium leading-[24px] tracking-[-0.28px]">
            {capacity} People
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 lg:mt-6">
        <div className="flex flex-col">
          <RenderIf condition={!!discountPrice}>
            <p className=" text-muted-foreground text-sm font-bold line-through">
              {formatPrice(price)}
            </p>
          </RenderIf>
          <p className="text-secondary-500 text-xl font-bold">
            {formatPrice(discountPrice || price)}
          </p>
        </div>
        /<span className="text-sm text-secondary-300">day</span>
        <Button asChild>
          <Link
            to={paths.PAYMENT(_id)}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                toast.warning("Please login in to rent a car");
                openDialog(DialogTypeEnum.LOGIN);
              }
            }}
          >
            Rent Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

RentCard.Skeleton = function () {
  return (
    <div className="w-full bg-white rounded-[10px] p-4 lg:p-6">
      <div className="flex justify-between">
        <div>
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <div className="mt-8 lg:mt-12 relative">
        <Skeleton className="w-full h-32 object-contain" />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,#FFF_100%)] w-full h-[68px] absolute bottom-0" />
      </div>
      <div className="flex justify-between items-center mt-5 lg:mt-9">
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-8" />
        </div>
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex gap-1.5 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 lg:mt-6">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
};
