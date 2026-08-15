/**
 * Project data is exposed through the projects feature so project-related
 * components do not need to know where the portfolio's content store lives.
 *
 * This is intentionally a compatibility layer during the refactor. The next
 * project-content pass can move the project records here without changing
 * consumers.
 */
export { projects } from "../../../components/portfolio/data";
