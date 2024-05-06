export default function Page() {
    return <div className={"container mx-auto p-4 sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl"}>
        <h1 className={"text-3xl font-semibold mb-5"}>About</h1>
        <div className={"text-justify"}>
            <h2 className={"text-2xl font-semibold"}>
                Why did I develop "Resume as Code"
            </h2>
            <p>
                I've explored various CV builder platforms over the years.
                However, I encountered a host of issues that left me unsatisfied.
                These issues included the inability to format my content precisely the way I wanted and a limited choice
                of components to truly showcase my skills and experiences.
                Furthermore, transitioning between different platforms requires me to manual copy-pasting of my data.
            </p>
            <p>
                These problems inspired me to create the "Resume as Code" tool. I envisioned a resume builder that could
                accept input in the form of a structured data format, such as JSON or YAML, and utilize the simplicity
                and versatility of Markdown to craft content. In doing so, users could effortlessly export their own
                data, then import to other tools that use the same structure that including other Resume builder tools.
                We can build a ecosystem together.
            </p>
        </div>
        <div className={"mt-3"}>
            <h2 className={"text-2xl font-semibold"}>Main Features</h2>
            <p>
                <h3 className={"font-semibold mt-3"}>
                    1. Powered by Markdown Format
                </h3>
                Markdown is a simple and widely-used formatting language, making it easy for users to create and edit
                their
                resumes. Whether you're a beginner or a seasoned coder, Markdown is a user-friendly choice.
            </p>

            <p>
                <h3 className={"font-semibold mt-3"}>2. Write with Familiar Language by YAML</h3>
                Writing your resume in YAML, a human-readable data serialization format, ensures that your resume
                content is
                both structured and intuitive.
            </p>

            <p>
                <h3 className={"font-semibold mt-3"}>3. Manage Multiple Resumes</h3>
                For those with diverse skill sets or looking to apply for various positions, "Resume as Code" enables
                you to
                manage multiple resume.
            </p>

            <p>
                <h3 className={"font-semibold mt-3"}>4. Easy Export and Sharing</h3>
                After writed and saved Resume, you can export to not only PDF but also JSON or YAML.
            </p>

            <p>
                <h3 className={"font-semibold mt-3"}>5. You Own All Your Data</h3>
                I understand the importance of abouprivacy and data ownership. Unlike other online platforms, "Resume as
                Code"
                stores all your data locally, ensuring that your sensitive personal and professional information remains
                in
                your control.
            </p>
        </div>
        <div>
            <h2 className={"text-2xl font-semibold mt-3"}>
                Contact
            </h2>
            <div>
                <h3>
                    Email: <a href="mailto:jacktt.dev@gmail.com">jacktt.dev@gmail.com</a>
                </h3>
                <h3>
                    Github: <a href="https://github.com/huantt">github.com/huantt</a>
                </h3>
            </div>
        </div>
    </div>
}