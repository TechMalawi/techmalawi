const Button = ({ title, variant, classes }) => {
	if (variant === 'primary') {
		return (
			<button className={`${classes} btn-primary flex items-center justify-center gap-4`}>
				{title}
			</button>
		);
	}
	if (variant === 'primary-outline') {
		return (
			<button className={`${classes} btn-primary-outline flex items-center justify-center gap-4`}>
				{title}
			</button>
		);
	}
	if (variant === 'danger') {
		return (
			<button className={`${classes} btn-danger flex items-center justify-center gap-4`}>
				{title}
			</button>
		);
	}
	if (variant === 'danger-outline') {
		return (
			<button className={`${classes} btn-danger-outline flex items-center justify-center gap-4`}>
				{title}
			</button>
		);
	}

	return (
		<button className={`${classes} btn-primary flex items-center justify-center gap-4`} disabled>
			{title}
		</button>
	);
};

export default Button;
