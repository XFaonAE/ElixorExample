import { AppWindow } from "@skylixgh/elixor-desktop";

new class Main {
    #window: AppWindow;

    public constructor() {
        this.#window = new AppWindow({
            mica: true,
        });

        this.#window.run();
    }
}
