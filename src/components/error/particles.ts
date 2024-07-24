interface Mouse {
  radius: number;
  x: number;
  y: number;
}

export function particlesCanvas(canvasElement: HTMLCanvasElement) {
  const context = canvasElement.getContext("2d");

  const canvas = canvasElement;
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  // Particles Class
  class Particle {
    private originX: number;
    private originY: number;
    private x: number;
    private y: number;
    private effect: Effect;
    private ctx: CanvasRenderingContext2D;
    private vx: number;
    private vy: number;
    private ease: number;
    private friction: number;
    private dx: number;
    private dy: number;
    private distance: number;
    private force: number;
    private angle: number;
    private size: number;
    public spread: number;

    constructor(x: number, y: number, effect: Effect) {
      this.originX = x;
      this.originY = y;
      this.effect = effect;
      this.x = Math.floor(x);
      this.y = Math.floor(y);
      this.ctx = effect.ctx;
      this.ctx.fillStyle = "#f97415";
      this.vx = 0;
      this.vy = 0;
      this.ease = 0.05;
      this.friction = 0.9;
      this.dx = 0;
      this.dy = 0;
      this.distance = 0;
      this.force = 0;
      this.angle = 0;
      // this.size = Math.floor(Math.random() * 5 + 2);
      this.size = 3;
      this.spread = 20;
      this.draw();
    }
    draw() {
      this.ctx.beginPath();
      this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      this.force = (-this.effect.mouse.radius / this.distance) * this.spread;

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      }

      this.x +=
        (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y +=
        (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      this.draw();
    }
  }

  // Effect class
  class Effect {
    private width: number;
    private height: number;
    private gap: number;
    public ctx: CanvasRenderingContext2D;
    private particlesArray: Particle[];
    public readonly mouse: Mouse;
    constructor(
      width: number,
      height: number,
      context: CanvasRenderingContext2D,
    ) {
      this.width = width;
      this.height = height;
      this.ctx = context;
      this.particlesArray = [];
      this.gap = 20;
      this.mouse = {
        radius: 3000,
        x: 0,
        y: 0,
      };

      window.addEventListener("mousemove", (event) => {
        this.mouse.x = event.clientX * window.devicePixelRatio;
        this.mouse.y = event.pageY * window.devicePixelRatio;
        this.mouse.radius = 3000;
      });
      window.addEventListener("mouseout", () => {
        this.mouse.x = 0;
        this.mouse.y = 0;
        this.mouse.radius = 0;
      });
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        this.width = canvas.width;
        this.height = canvas.height;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        this.particlesArray = [];
      });

      this.init();
    }

    init() {
      for (let x = 0; x < this.width; x += this.gap) {
        for (let y = 0; y < this.height; y += this.gap) {
          this.particlesArray.push(new Particle(x, y, this));
        }
      }
    }
    update() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let index = 0; index < this.particlesArray.length; index++) {
        this.particlesArray[index].update();
      }
    }
  }
  const effect = new Effect(canvas.width, canvas.height, context!);
  function animate() {
    effect.update();
    requestAnimationFrame(animate);
  }
  animate();
}
