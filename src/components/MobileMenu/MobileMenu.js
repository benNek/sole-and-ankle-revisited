/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import { X } from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay
      style={{
        background: "rgba(96, 100, 108, 0.8)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent
        style={{
          background: COLORS.white,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "300px",
        }}
      >
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <X />
          </UnstyledButton>
        </ButtonWrapper>
        <Wrapper>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Wrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 12px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 32px;
  gap: 7px;
`;

const NavLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.gray[900]};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${COLORS.gray[700]};

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

export default MobileMenu;
