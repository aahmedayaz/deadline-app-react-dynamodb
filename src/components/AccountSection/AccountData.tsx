import React from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import DarkMode from "./DarkMode";
import TasksDone from "./TasksDone";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full relative">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
          <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4" />
        </span>

        <DarkMode />

        <TasksDone />
        <a
          href="https://github.com/aahmedayaz"
          className=" absolute bottom-[20px] mt-4 block p-2 rounded-md text-rose-600 text-center transition dark:bg-slate-700/[.3] dark:text-slate-200 dark:hover:bg-emerald-900 "
        >
          Projected by Ahmed Ayaz
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
