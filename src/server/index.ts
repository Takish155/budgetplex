import { router, t } from "./trpc";
import { transactionRouter } from "./transaction/transactionRouter";
import { getGoalRouter } from "./goals/getGoalRouter";
import { getUsernameRouter } from "./getUsername";
import { verificationRouter } from "./verification/verificationRouter";
const { createCallerFactory } = t;

export const appRouter = router({
  balance: transactionRouter,
  financial_goals: getGoalRouter,
  getUsername: getUsernameRouter.getUsername,
  verification: verificationRouter,
});

const createCaller = createCallerFactory(appRouter);
export const caller = createCaller({
  foo: "bar",
});

export type AppRouter = typeof appRouter;
