/** @format */
export default function DashBoardLayout ({
    children,
    analistycs,
    social,
    users,
    login
}:
{   
    children: React.ReactNode;
    analistycs: React.ReactNode;
    social: React.ReactNode;
    users: React.ReactNode;
    login: React.ReactNode;
}) {
    const IsLogin = false;
    return (
        <div>
            <h1>DashBoard Page</h1>
            <div>{children}</div>
        {IsLogin ? (
        <div>
            <div>
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{social}</div>
                </div>
                <div className="flex flex-1">{analistycs}</div>
            </div>
            </div>
        </div>
        ): (
            <div>{login}</div>
        )}
        </div>
    );
}