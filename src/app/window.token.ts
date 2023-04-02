import { InjectionToken } from "@angular/core";


export const WINDOW = new InjectionToken<Window>('global Window object', {
  providedIn: 'root',
  factory: () => {
    return window;
  }
});
