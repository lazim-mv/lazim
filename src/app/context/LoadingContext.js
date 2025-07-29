"use client";

import { createContext, useContext } from "react";

const LoadingContext = createContext({ isReady: false });

export const useLoadingContext = () => useContext(LoadingContext);

export default LoadingContext;