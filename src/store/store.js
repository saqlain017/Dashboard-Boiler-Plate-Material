import { configureStore } from "@reduxjs/toolkit";

import authslice from "@/features/authslice/authslice";
import dashboardslice from "@/features/dashboardslice/dashboardslice";

export const store = configureStore({
    reducer: {
        auth : authslice,
        dashboard : dashboardslice
    }
})