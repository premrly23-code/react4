import React, { useState } from 'react';
import "./eelna.css";

export default function ChefElena() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="page-wrapper">
      <div className="ambient-glow" />

      {/* Header -> div */}
      <div className="navbar">
        <div className="brand-logo">
          Chef Elena
        </div>

        <div className="nav-actions">
          <div className="icon-btn" aria-label="Cart / Reservations" role="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Section -> div */}
      <div className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-title">
            Crafting Memorable<br />Dining Experiences
          </div>
          <div className="hero-description">
            Elevating everyday ingredients into extraordinary culinary moments.
            Offering bespoke private chef services, intimate event catering, and
            meticulously crafted menus tailored to your taste and occasion.
          </div>
          <div className="btn btn-primary" role="button">Book a Table Today</div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
            alt="Warm culinary dining table with rustic stew and fresh bread"
            className="hero-image"
          />
        </div>
      </div>

      {/* Featured Section -> div */}
      <div className="featured-section" id="recipes">
        <div className="section-header">
          <div className="section-title">Featured Works</div>
          <div className="view-all-link">
            View all <div>&rarr;</div>
          </div>
        </div>

        <div className="featured-grid">
          {/* Article -> div */}
          <div className="recipe-card large-card">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
              alt="American Fluffy Pancakes with berries and syrup"
              className="card-media"
            />
            <div className="card-scrim" />
            <div className="card-content">
              <div className="badge-group">
                <div className="badge badge-accent">BREAKFAST</div>
                <div className="badge badge-glass">30 MIN</div>
              </div>
              <div className="card-title">American Berry Pancakes</div>
              <div className="card-meta">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                15 mins prep
              </div>
            </div>
          </div>

          <div className="cards-stack">
            <div className="recipe-card small-card">
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
                alt="Heirloom Tomato Soup with toast"
                className="card-media"
              />
              <div className="card-scrim" />
              <div className="card-content">
                <div className="card-title">Heirloom Tomato Soup</div>
                <div className="card-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  25 mins cook
                </div>
              </div>
            </div>

            <div className="recipe-card small-card">
              <img
                src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80"
                alt="Lemon and Herb Roast Chicken"
                className="card-media"
              />
              <div className="card-scrim" />
              <div className="card-content">
                <div className="card-title">Lemon & Herb Roast Chicken</div>
                <div className="card-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  45 mins cook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section -> div */}
      <div className="cta-section">
        <div className="cta-banner">
          <div className="cta-title">Ready to elevate your next event?</div>
          <div className="cta-subtitle">
            Let's create memories through unforgettable flavors, always customized
            and tailored to your unique special occasion.
          </div>
          <div className="btn btn-secondary" role="button">Schedule a Consultation</div>
        </div>
      </div>

      {/* Footer -> div */}
      <div className="footer">
        <div className="footer-left">
          <div className="brand-logo footer-logo">Chef Elena</div>
        </div>

        <div className="footer-nav">
          <div>Home</div>
          <div>Privacy</div>
          <div>Contact</div>
        </div>

        <div className="footer-right">
          <div>© 2024 Chef Elena. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}