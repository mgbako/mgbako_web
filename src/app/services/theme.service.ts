import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private _mode: string | null;
  constructor() {
    this._mode = localStorage.getItem("theme_mode");
  }

  public get mode(): string | null {
    return this._mode;
  }

  public setMode(state: string) {
    this._mode = state || null;

    if (state) {
      localStorage.setItem("theme_mode", "dark");
    } else {
      localStorage.removeItem("theme_mode");
    }
  }
}
