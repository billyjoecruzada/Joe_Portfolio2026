// Billy Joe Cruzada Portfolio - Before/After Interactive Comparison Slider (homepage only)
// Drag-only interaction: press and drag (mouse or touch) to reveal; nothing moves on hover alone.

function setBeforeAfterPosition(widget, percent) {
    const pos = Math.min(100, Math.max(0, percent));
    widget.style.setProperty('--ba-pos', pos + '%');
    const handle = widget.querySelector('.ba-handle');
    if (handle) {
        handle.setAttribute('aria-valuenow', Math.round(pos));
    }
}

function startBeforeAfterDrag(widget, clientX) {
    setBeforeAfterFromClientX(widget, clientX);
    widget.classList.add('dragging');
    const handle = widget.querySelector('.ba-handle');
    if (handle) handle.classList.add('dragging');
}

function setBeforeAfterFromClientX(widget, clientX) {
    const rect = widget.getBoundingClientRect();
    if (!rect.width) return;
    setBeforeAfterPosition(widget, ((clientX - rect.left) / rect.width) * 100);
}

function endBeforeAfterDrag(widget) {
    widget.classList.remove('dragging');
    const handle = widget.querySelector('.ba-handle');
    if (handle) handle.classList.remove('dragging');
}

function attachBeforeAfter(widget) {
    if (!widget) return;

    // Keyboard nudge: the handle stays focusable and works without hover.
    const handle = widget.querySelector('.ba-handle');
    if (handle) {
        handle.addEventListener('keydown', (e) => {
            const current = parseFloat(widget.style.getPropertyValue('--ba-pos')) || 0;
            const step = (e.shiftKey ? 25 : 5);
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                setBeforeAfterPosition(widget, current + step);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setBeforeAfterPosition(widget, current - step);
            } else if (e.key === 'Home') {
                e.preventDefault();
                setBeforeAfterPosition(widget, 0);
            } else if (e.key === 'End') {
                e.preventDefault();
                setBeforeAfterPosition(widget, 100);
            }
        });
    }

    // Drag-only interaction (mouse + touch) using Pointer Capture.
    // Pointer capture keeps pointermove/pointerup flowing to the widget even
    // when the cursor leaves it, and blocks native image-drag / scroll hijack.
    let activePointerId = null;

    const onPointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return; // left button only
        e.preventDefault();
        activePointerId = e.pointerId;
        startBeforeAfterDrag(widget, e.clientX);
        if (widget.setPointerCapture && widget.hasPointerCapture) {
            try { widget.setPointerCapture(e.pointerId); } catch (err) {}
        }
    };

    const onPointerMove = (e) => {
        if (e.pointerId !== activePointerId) return;
        setBeforeAfterFromClientX(widget, e.clientX);
    };

    const onPointerEnd = (e) => {
        if (e.pointerId !== activePointerId && e.type !== 'lostpointercapture') return;
        if (activePointerId !== null && widget.releasePointerCapture && widget.hasPointerCapture(activePointerId)) {
            try { widget.releasePointerCapture(activePointerId); } catch (err) {}
        }
        activePointerId = null;
        endBeforeAfterDrag(widget);
    };

    widget.addEventListener('pointerdown', onPointerDown);
    widget.addEventListener('pointermove', onPointerMove);
    widget.addEventListener('pointerup', onPointerEnd);
    widget.addEventListener('pointercancel', onPointerEnd);
    widget.addEventListener('lostpointercapture', onPointerEnd);
}

function renderBeforeAfterSection(container, items) {
    if (!container || !items || items.length === 0) return;

    container.innerHTML = items.map((item, index) => `
        <div class="before-after-card reveal reveal-delay-${(index % 4) + 1}" id="ba-${item.id}">
            <div class="before-after-widget" data-project-title="${item.title}">
                <img src="${item.after}" alt="${item.title} - After" class="ba-image ba-image-after" loading="lazy" decoding="async">
                <img src="${item.before}" alt="${item.title} - Before" class="ba-image ba-image-before" loading="lazy" decoding="async" style="clip-path: inset(0 0 0 var(--ba-pos, 75%));">
                <span class="ba-label ba-label-after">AFTER</span>
                <span class="ba-label ba-label-before">BEFORE</span>
                <div class="ba-handle" tabindex="0" role="slider" aria-label="Before and after comparison" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
                    <span class="ba-handle-grip">&#8596;</span>
                </div>
            </div>
            <p class="before-after-title">${item.title}</p>
        </div>
    `).join('');

    container.querySelectorAll('.before-after-widget').forEach(widget => {
        attachBeforeAfter(widget);
    });
}