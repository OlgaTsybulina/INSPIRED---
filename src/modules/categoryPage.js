import { DATA } from "./const";
import { renderHero } from "./render/renderHero";
import { renderNavigation } from "./render/renderNavigation";
import { renderProducts } from "./render/renderProducts";

export const categoryPage = (routerData) => {
    const { gender, category } = routerData.data;
    const params = {gender, category};
    
    const { title } = DATA.naviganion[gender].list.find(
        (item) => item.slug === category,
    );
    
    renderNavigation(gender);
    renderHero(false);
    renderProducts(title, params);
}