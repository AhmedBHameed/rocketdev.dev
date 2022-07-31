import React from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';
import Col from '../Col/Col';
import Row from '../Row/Row';
import {AhmedSvg} from './AhmedSvg';
import {GitHub, Globe, Mail, Linkedin} from 'react-feather';

const AboutMe = () => {
  return (
    <div
      className={clsx(
        'prose',
        'prose-lg',
        'mx-auto',
        'rounded',
        theme.bgSecondary,
        theme.text
      )}
    >
      <div className={clsx('prose-md', 'mx-auto')}>
        <Row gutter={[4]} gap={4} xs={12} className="mb-24 w-full">
          <Col
            colSpan={4}
            className={clsx('hidden', 'sm:block', 'overflow-hidden')}
          >
            <div>
              <AhmedSvg className={clsx('w-48', 'h-60', 'mt-2')} />
            </div>
          </Col>

          <Col colSpan={8}>
            <h3 className={clsx(theme.text)}>
              <span className={clsx('text-red-500')}>Hi!</span> I'm Ahmed
              HAMEED!
            </h3>
            <p className="leading-tight">
              Software engineer and entrepreneur. I love learning/coaching new
              technologies and coding is my life style.
            </p>

            <Row gap={4} xs={12}>
              <Col className="flex justify-center items-center">
                <a href="https://www.ahmedhameed.dev" target="_blank">
                  <Globe className="text-red-500" />
                </a>
              </Col>

              <Col className="flex justify-center">&#9679;</Col>

              <Col className="flex justify-center items-center">
                <a href="https://github.com/AhmedBHameed" target="_blank">
                  <GitHub className="text-red-500" />
                </a>
              </Col>

              <Col className="flex justify-center">&#9679;</Col>

              <Col className="flex justify-center items-center">
                <a href="mailto:contact@ahmedhameed.dev" target="_blank">
                  <Mail className="text-red-500" />
                </a>
              </Col>

              <Col className="flex justify-center">&#9679;</Col>

              <Col className="flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/"
                  target="_blank"
                >
                  <Linkedin className="text-red-500" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMe;
