import { BehaviorSubject } from "rxjs";

const user$ = new BehaviorSubject({});

setTimeout(() => {
  console.log("timeout");
  user$.next({});
}, 3000);

export default user$;
