import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    gsap.to('.rocket1', {
      scrollTrigger: {
        trigger: '.gsap-bg',
        start: 'top top',
        end: 'bottom+=500 top',
        scrub: true,
      },
      y: '-150vh',
      x: '50vw',
      // rotation: 720,
      ease: 'none',
    });

    gsap.to('.rocket2', {
      scrollTrigger: {
        trigger: '.gsap-bg',
        start: 'top top',
        end: 'bottom+=600 top',
        scrub: true,
      },
      y: '-200vh',
      x: '-40vw',
      rotation: 360,
      ease: 'none',
    });

    gsap.to('.cloud-left', {
      x: '50vw',
      scrollTrigger: {
        trigger: '.clouds',
        start: 'top 40%',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.cloud-right', {
      x: '-50vw',
      scrollTrigger: {
        trigger: '.clouds',
        start: 'top 40%',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.cloud-left', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.cloud-right', {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.comet1', {
      x: '120vw',
      y: '120vh',
      duration: 5,
      repeat: -1,
      delay: 2,
      ease: 'power2.inOut',
    });

    gsap.to('.comet2', {
      x: '-120vw',
      y: '100vh',
      duration: 6,
      repeat: -1,
      delay: 5,
      ease: 'power2.inOut',
    });

    gsap.utils.toArray('.left-box').forEach((box: any, i: number) => {
      gsap.to(box, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: box,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Animate right boxes
    gsap.utils.toArray('.right-box').forEach((box: any, i: number) => {
      gsap.to(box, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: box,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    const chartPath = this.el.nativeElement.querySelector('#chartLine');
    const pathLength = chartPath.getTotalLength();

    chartPath.style.strokeDasharray = pathLength;
    chartPath.style.strokeDashoffset = pathLength;

    gsap.to(chartPath, {
      strokeDashoffset: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.scroll-chart-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });

    // Animate dots
    gsap.to('.milestone', {
      opacity: 1,
      scale: 1.2,
      stagger: 0.2,
      transformOrigin: 'center',
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: '.scroll-chart-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });

    // Animate text labels
    gsap.to('.label', {
      opacity: 1,
      y: -5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.scroll-chart-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
  }
}
