﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS21
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Форма.
    /// </summary>
    // *** Start programmer edit section *** (Форма CustomAttributes)

    // *** End programmer edit section *** (Форма CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормаE", new string[] {
            "Наименование as \'Наименование\'"})]
    [View("ФормаL", new string[] {
            "Наименование as \'Наименование\'"})]
    public class Форма : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Форма CustomMembers)

        // *** End programmer edit section *** (Форма CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Форма.Наименование CustomAttributes)

        // *** End programmer edit section *** (Форма.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Форма.Наименование Get start)

                // *** End programmer edit section *** (Форма.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Форма.Наименование Get end)

                // *** End programmer edit section *** (Форма.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Форма.Наименование Set start)

                // *** End programmer edit section *** (Форма.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Форма.Наименование Set end)

                // *** End programmer edit section *** (Форма.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаE", typeof(IIS.ISS21.Форма));
                }
            }
            
            /// <summary>
            /// "ФормаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаL", typeof(IIS.ISS21.Форма));
                }
            }
        }
    }
}
