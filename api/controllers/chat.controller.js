import prisma from "../lib/prisma.js";

export const checkChat = async (req, res) => {
    const { userId1, userId2 } = req.query;
  
  try {
    // Find a chat that includes both userId1 and userId2 in the userIDs array
    const chat = await prisma.chat.findFirst({
      where: {
        AND: [
            {
              userIDs: {
                has: userId1,
              },
            },
            {
              userIDs: {
                has: userId2,
              },
            },
        ],
      },
    });

    // console.log(chat);
    

    if (chat) {
      // If a chat exists, return its ID
      res.json({ exists: true, chatId: chat.id });
    } else {
      // If no chat exists, return false
      res.json({ exists: false });
    }
  } catch (error) {
    console.log("Error while checking for existing chat:", error);
    res.status(500).json({ message: 'Server error', error });
  }
}

export const getChats = async (req,res) =>{
    const tokenUserId = req.userId;
    
    try{
        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId],
                },
            },
        });

        for (const chat of chats) {
            const receiverId = chat.userIDs.find((id) => id !== tokenUserId);

            const receiver = await prisma.user.findUnique({
                where: {
                    id: receiverId,
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true,
                },
            });
            chat.receiver = receiver;
        }
        res.status(200).json(chats);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:"Failed to get chats!"}); 
    }
}

export const getChat = async (req,res) =>{
    const tokenUserId = req.userId;

    try{
        const chat = await prisma.chat.findUnique({
            where: {
                id: req.params.id,
                userIDs: {
                    hasSome: [tokenUserId],
                },
            },
            include: {
                messages: {
                    orderBy: {
                        createAt: "asc",
                    },
                },
            },
        });

        await prisma.chat.update({
            where: {
                id: req.params.id,
            },
            data: {
                seenBy: {
                    push: [tokenUserId],
                },
            },
        });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:"Failed to get chat!"}); 
    }
}

export const addChat = async (req,res) =>{
    const tokenUserId = req.userId;

    try{
        const newChat = await prisma.chat.create({
            data: {
                userIDs: [tokenUserId, req.body.receiverId],
            },
        });
        res.status(200).json(newChat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:"Failed to add chat!"}); 
    }
}

export const readChat = async (req,res) =>{
    const tokenUserId = req.userId;

    try{
        const chat = await prisma.chat.update({
            where: {
                id: req.params.id,
                userIDs: {
                    hasSome: [tokenUserId],
                },
            },
            data: {
                seenBy: {
                    push: [tokenUserId],
                },
            },
        });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:"Failed to read chat!"}); 
    }
}

// export const getUser = async (req,res) =>{
//     const id = req.params.id;
//     try{
//         const user = await prisma.user.findUnique({
//             where: { id },
//         });
//         res.status(200).json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message:"Failed to get user!"}); 
//     }
// }

// export const updateUser = async (req,res) =>{
//     const id = req.params.id;
//     const tokenUserId = req.userId;
//     const {password, avatar, ...inputs} = req.body;

//     if (id !== tokenUserId) {
//         return res.status(403).json({ message:"Not Authorized!" });
//     }

//     let updatedPassword = null;

//     try{
//         if (password) {
//             updatedPassword = await bcrypt.hash(password, 10);
//         }

//         const updatedUser = await prisma.user.update({
//             where: { id },
//             data: {
//                 ...inputs,
//                 ...(updatedPassword && { password: updatedPassword }),
//                 ...(avatar && { avatar }),
//             }
//         });

//         const { password: userPassword, ...rest } = updatedUser;

//         res.status(200).json(rest);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message:"Failed to update user!"}); 
//     }
// }

// export const deleteUser = async (req,res) =>{
//     const id = req.params.id;
//     const tokenUserId = req.userId;

//     if (id !== tokenUserId) {
//         return res.status(403).json({ message:"Not Authorized!" });
//     }
//     try{
//         await prisma.user.delete({
//             where: { id },
//         });
//         res.status(200).json({ message:"User deleted!" });        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message:"Failed to delete user!"}); 
//     }
// }

// export const savePost = async (req,res) => {
//     const postId = req.body.postId;
//     const tokenUserId = req.userId;

//     try{
//         const savedPost = await prisma.savedPost.findUnique({
//             where: { 
//                 userId_postId: {
//                     userId: tokenUserId,
//                     postId,
//                 },
//             },
//         });

//         if (savedPost) {
//             await prisma.savedPost.delete({
//                 where: {
//                     id: savedPost.id,
//                 },
//             });
//             res.status(200).json({ message:"Post removed from saved list!" });
//         } else {
//             await prisma.savedPost.create({
//                data: {
//                     userId: tokenUserId,
//                     postId,
//                }, 
//             });
//             res.status(200).json({ message:"Post saved!" });        
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message:"Failed to save post!"}); 
//     }
// }

// export const profilePosts = async (req,res) =>{
//     const tokenUserId = req.params.userId;
//     try{
//         const userPosts = await prisma.post.findMany({
//             where: { userId: tokenUserId },
//         });

//         const saved = await prisma.savedPost.findMany({
//             where: { userId: tokenUserId },
//             include: {
//                 post: true,
//             },
//         });

//         const savedPosts = saved.map((item) => item.post);
//         res.status(200).json({ userPosts, savedPosts });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message:"Failed to get profile posts!"}); 
//     }
// }