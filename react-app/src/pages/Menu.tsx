import React, { useState, useMemo } from 'react';
import { menuData } from '../data/menuData';
import type { MenuItem } from '../types';
import './Menu.css';

interface MenuPageProps {
  onShowModal: (title: string, message: string) => void;
}

const Menu: React.FC<MenuPageProps> = ({ onShowModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('name');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const itemsPerPageCount = 8;

  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(menuData.map(item => item.category)));
    return ['all', ...cats];
  }, []);

  const processedItems = useMemo(() => {
    let items = selectedCategory === 'all' 
      ? [...menuData] 
      : menuData.filter(item => item.category === selectedCategory);

    if (sortOption === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'category') {
      items.sort((a, b) => {
        if (a.category === b.category) {
          return a.name.localeCompare(b.name);
        }
        return a.category.localeCompare(b.category);
      });
    }

    return items;
  }, [selectedCategory, sortOption]);

  const totalPagesCount = Math.ceil(processedItems.length / itemsPerPageCount);
  const startIdx = (currentPageNum - 1) * itemsPerPageCount;
  const endIdx = startIdx + itemsPerPageCount;
  const displayedItems = processedItems.slice(startIdx, endIdx);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPageNum(1);
  };

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPagesCount) {
      setCurrentPageNum(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddItem = (item: MenuItem) => {
    onShowModal('Producto Agregado', `¡${item.name} agregado al carrito!`);
  };

  return (
    <div className="menu-page-container">
      <section className="menu-banner">
        <div className="menu-banner-content">
          <h1 className="banner-title">Menú Online</h1>
          <p className="banner-subtitle">Explora nuestros deliciosos platillos y realiza tu pedido</p>
        </div>
      </section>

      <div className="menu-content-wrapper">
        <div className="filters-card">
          <h5 className="filters-title">Filtrar por Categoría:</h5>
          <div className="category-buttons-group">
            {allCategories.map(cat => (
              <button
                key={cat}
                className={`category-filter-btn ${selectedCategory === cat ? 'selected' : ''}`}
                onClick={() => handleCategorySelect(cat)}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>
          <div className="filters-bottom-row">
            <div className="result-badge">
              Mostrando {startIdx + 1}-{Math.min(endIdx, processedItems.length)} de {processedItems.length} productos
              {selectedCategory !== 'all' && ` en ${selectedCategory}`}
            </div>
            <div className="sort-dropdown-wrapper">
              <select 
                id="sortDropdown"
                className="sort-dropdown" 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="name">Ordenar por nombre</option>
                <option value="category">Ordenar por categoría</option>
              </select>
            </div>
          </div>
        </div>

        <div className="products-grid-layout">
          {displayedItems.map(item => (
            <div key={item.id} className="product-card-item">
              <img src={item.image} className="product-image" alt={item.name} />
              <div className="product-card-body">
                <h5 className="product-name">{item.name}</h5>
                <div className="product-ingredients">
                  <small className="ingredients-label">Ingredientes:</small>
                  <div className="ingredients-tags">
                    {item.ingredients.map((ing, idx) => (
                      <span key={idx} className="ingredient-badge">{ing}</span>
                    ))}
                  </div>
                </div>
                <div className="product-footer-section">
                  <span className="product-price">RD${item.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddItem(item)}
                  >
                    + Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPagesCount > 1 && (
          <div className="pagination-controls">
            <button
              className="page-nav-btn"
              disabled={currentPageNum === 1}
              onClick={() => handlePageChange(currentPageNum - 1)}
            >
              Anterior
            </button>
            
            <div className="page-numbers-group">
              {Array.from({ length: totalPagesCount }, (_, i) => i + 1).map(pageNum => {
                const isVisible = Math.abs(pageNum - currentPageNum) <= 2 || 
                                 pageNum === 1 || 
                                 pageNum === totalPagesCount;
                
                if (!isVisible) {
                  if (pageNum === currentPageNum - 3 || pageNum === currentPageNum + 3) {
                    return <span key={pageNum} className="page-ellipsis">...</span>;
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    className={`page-number-btn ${pageNum === currentPageNum ? 'active-page' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              className="page-nav-btn"
              disabled={currentPageNum === totalPagesCount}
              onClick={() => handlePageChange(currentPageNum + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
