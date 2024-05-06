import {PersonalInfo} from "@/model/personal-info";

export function PersonalInformation(props: { data: PersonalInfo, className?: string | undefined }) {
    if (props.data == undefined) return

    return <div className={`flex ${props.className ? props.className : ''}`}>
        <div className={"w-48 h-56 mr-4"}>
            <img src={props.data.avatar} alt={props.data.first_name} className={"w-full h-full object-cover"}/>
        </div>
        <div>
            <div className={"text-4xl font-semibold mb-3"}>
                <span>{props.data.first_name}</span> <span>{props.data.last_name} </span>
                {
                    props.data.nickname && <span>({props.data.nickname})</span>
                }
            </div>

            <div className={"text-xl font-semibold mb-3"}>{props.data.title}</div>
            <table className={"table-auto"}>
                <tbody className={"text-left"}>
                {
                    props.data.gender &&
                    <tr>
                        <th className={"w-32"}>Gender:</th>
                        <td className={"capitalize"}>{props.data.gender}</td>
                    </tr>
                }
                {
                    props.data.phone &&
                    <tr>
                        <th>Phone:</th>
                        <td>{props.data.phone}</td>
                    </tr>
                }
                {
                    props.data.email &&
                    <tr>
                        <th>Email:</th>
                        <td>{props.data.email}</td>
                    </tr>
                }
                {
                    props.data.website &&
                    <tr>
                        <th>Website:</th>
                        <td>{props.data.website}</td>
                    </tr>
                }
                {
                    props.data.address &&
                    <tr>
                        <th>Address:</th>
                        <td className={"capitalize"}>{props.data.address}</td>
                    </tr>
                }
                </tbody>
            </table>

        </div>
    </div>
}