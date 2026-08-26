"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type EggProductVisualProps = {
  variant?: "compact" | "full";
};

type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
};

const menuItems: MenuItem[] = [
  { id: "butter-bhurji", name: "Butter Egg Bhurji", category: "Bhurji", price: 49 },
  { id: "cheese-bhurji", name: "Cheese Egg Bhurji", category: "Bhurji", price: 69 },
  { id: "chicken-bhurji", name: "Cheese Egg Chicken Bhurji", category: "Bhurji", price: 169 },
  { id: "egg-bhurji", name: "Egg Bhurji", category: "Bhurji", price: 29 },
  { id: "egg-chicken", name: "Egg Chicken Bhurji", category: "Bhurji", price: 139 },
  { id: "boiled-egg", name: "Boiled Egg", category: "Egg items", price: 12 },
];

const categories = ["All", "Bhurji", "Egg items", "Frankie", "Fries", "Gravy"];

function PosIcon({ name }: { name: "dashboard" | "orders" | "stock" | "prints" }) {
  const paths = {
    dashboard: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /></>,
    orders: <><path d="M8 4h8" /><path d="M9 2h6v4H9z" /><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 11h6M9 15h6" /></>,
    stock: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" /><path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" /></>,
    prints: <><path d="M7 9V3h10v6" /><rect x="4" y="9" width="16" height="9" rx="2" /><path d="M7 15h10v6H7zM16 12h1" /></>,
  };

  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">{paths[name]}</svg>;
}

export function EggProductVisual({ variant = "compact" }: EggProductVisualProps) {
  const interactive = variant === "full";
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const visibleItems = useMemo(() => menuItems.filter((item) => {
    const categoryMatches = category === "All" || item.category === category;
    const queryMatches = item.name.toLowerCase().includes(query.trim().toLowerCase());
    return categoryMatches && queryMatches;
  }), [category, query]);

  const cartLines = menuItems.filter((item) => cart[item.id]).map((item) => ({
    ...item,
    quantity: cart[item.id],
  }));
  const total = cartLines.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function addItem(item: MenuItem) {
    if (!interactive) return;
    setCart((current) => ({ ...current, [item.id]: (current[item.id] ?? 0) + 1 }));
  }

  function removeItem(item: MenuItem) {
    if (!interactive) return;
    setCart((current) => {
      const nextQuantity = Math.max(0, (current[item.id] ?? 0) - 1);
      return { ...current, [item.id]: nextQuantity };
    });
  }

  return (
    <div className={`egg-pos-ui egg-pos-ui--${variant}`} aria-label={`${interactive ? "Interactive" : "Compact"} reconstruction of the Egg Express point of sale menu`}>
      <header className="egg-pos-commandbar">
        <div className="egg-pos-brand">
          <span><Image src="/images/egg-express/logo.webp" alt="" width={48} height={42} /></span>
          <p><strong>Egg Express</strong><small>Outlet operations</small></p>
        </div>
        <div className="egg-pos-account"><span><i /> Live</span><b>Owner</b></div>
      </header>

      <div className="egg-pos-shell">
        <nav className="egg-pos-rail" aria-label="POS workspace preview">
          {(["dashboard", "orders", "stock", "prints"] as const).map((item) => (
            <span className={item === "orders" ? "is-active" : undefined} key={item}>
              <PosIcon name={item} />
              <small>{item[0].toUpperCase() + item.slice(1)}</small>
            </span>
          ))}
        </nav>

        <section className="egg-pos-workspace">
          <div className="egg-pos-tabs">
            <span>New order</span><strong>Menu</strong><span>Active orders <b>0</b></span>
          </div>
          <div className="egg-pos-context"><p><small>New order for</small><strong>Choose a table</strong><span>No table · Select before opening</span></p><b>Change service</b></div>
          <div className="egg-pos-menu-heading"><p><strong>Choose dishes</strong><small>{visibleItems.length} shown</small></p>
            {interactive ? <label><span>Search dishes</span><input aria-label="Search dishes" onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes" value={query} /></label> : <span className="egg-pos-search">Search dishes</span>}
          </div>
          <div className="egg-pos-menu-body">
            <div className="egg-pos-categories" aria-label="Dish categories">
              {categories.map((item) => interactive ? (
                <button aria-pressed={category === item} key={item} onClick={() => setCategory(item)} type="button">{item}</button>
              ) : <span className={item === "All" ? "is-active" : undefined} key={item}>{item}</span>)}
            </div>
            <div className="egg-pos-dishes">
              {(visibleItems.length ? visibleItems : menuItems.slice(0, 3)).map((item) => {
                const quantity = cart[item.id] ?? 0;
                return <article className="egg-pos-dish" key={item.id}>
                  {interactive ? <button aria-label={`Add ${item.name}`} onClick={() => addItem(item)} type="button"><span><strong>{item.name}</strong><small>{item.category}</small></span><b>₹{item.price.toFixed(2)}</b></button> : <div><span><strong>{item.name}</strong><small>{item.category}</small></span><b>₹{item.price.toFixed(2)}</b></div>}
                  {interactive && quantity > 0 ? <div className="egg-pos-quantity"><button aria-label={`Remove one ${item.name}`} onClick={() => removeItem(item)} type="button">−</button><strong>{quantity}</strong><button aria-label={`Add another ${item.name}`} onClick={() => addItem(item)} type="button">+</button></div> : null}
                </article>;
              })}
            </div>
          </div>
        </section>

        <aside className="egg-pos-order">
          <div className="egg-pos-order-tabs"><strong>New order</strong></div>
          <header><p><small>Select a table</small><strong>New order</strong></p><b>₹{total.toFixed(2)}</b></header>
          <div className="egg-pos-cart">
            {cartLines.length ? cartLines.map((item) => <p key={item.id}><span>{item.quantity} × {item.name}</span><strong>₹{(item.price * item.quantity).toFixed(2)}</strong></p>) : <span>Add dishes from the menu.</span>}
          </div>
          {interactive ? <button className="egg-pos-primary" disabled={!cartLines.length} onClick={() => setCart({})} type="button">{cartLines.length ? `Open order · ₹${total.toFixed(2)}` : "Open order"}</button> : <span className="egg-pos-primary is-disabled">Open order</span>}
        </aside>
      </div>
    </div>
  );
}
