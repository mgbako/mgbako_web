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

  public setMode() {
    localStorage.setItem("theme_mode", "dark");
  }

  public setNormalMode() {
    localStorage.removeItem("theme_mode");
  }
}
