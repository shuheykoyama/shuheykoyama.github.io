import { visit } from "unist-util-visit";

export function remarkGridDirective() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "containerDirective" && node.name === "grid") {
				node.data = node.data || {};
				node.data.hName = "div";

				const existingProperties = node.data.hProperties || {};
				const existingClassName =
					existingProperties.className ?? existingProperties.class;
				const className = Array.isArray(existingClassName)
					? [...existingClassName]
					: typeof existingClassName === "string" &&
							existingClassName.length > 0
						? existingClassName.split(/\s+/)
						: [];

				if (!className.includes("image-grid")) {
					className.push("image-grid");
				}

				node.data.hProperties = {
					...existingProperties,
					className,
				};
			}
		});
	};
}
